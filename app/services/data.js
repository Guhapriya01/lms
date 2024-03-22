import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DataService extends Service {
    @service libraryData;

    @tracked booksReq = 0;
    @tracked libraryReq = 0;

    getData(url) {
        let arr = url.split("/");

        // library
        let library_id = arr[1];
        let lib;
        this.libraryData.data.forEach(element => {
            if (element.id == library_id) {
                lib = element;
                return;
            }
        });

        // books
        if (arr.length > 2) {
            let book_id = arr[3];
            let book;
            lib.books.forEach(element => {
                if (element.id == book_id) {
                    book = element;
                    return;
                }
            });
            if (book) this.booksReq++;
            return book;
        } else {
            if (lib) this.libraryReq++;
            return lib;
        }
    }
}
