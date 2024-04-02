import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DataService extends Service {
    @service libraryData;
    @tracked booksReq = 0;
    @tracked libraryReq = 0;

    // async getData(url) {
    //     let arr = url.split('/');

    //     // library
    //     let library_id = arr[1];
    //     let lib = await fetch(`/libraries/${library_id}`)
    //         .then((response) => response.json())
    //         .then((r) => r.data);

    //     // books
    //     if (arr.length == 3) {
    //         let books = await fetch(`/libraries/${library_id}/books`)
    //             .then((response) => response.json())
    //             .then((r) => r.data);
    //         return books;
    //     } else if (arr.length > 3) {
    //         let book_id = arr[3];
    //         let book = await fetch(`/books/${book_id}`)
    //             .then((response) => response.json())
    //             .then((r) => r.data);

    //         let lib_id = book.relationships.library.data.id;

    //         if (library_id != lib_id) book = null;

    //         if (book) this.booksReq++;
    //         return book;
    //     } else {
    //         if (lib) this.libraryReq++;
    //         return lib;
    //     }
    // }

    async getData(url) {
        console.log(url);
        let data = await fetch(url)
            .then((response) => response.json())
            .then((r) => r.data);

        if (data) {
            if (data.type == 'libraries') {
                if (data) this.libraryReq++;
            }
            else if (data.type == 'books') {
                if (data) this.booksReq++;
            }
        }
        return data;
    }
}

// let book;
// lib.books.forEach(element => {
//     if (element.id == book_id) {
//         book = element;
//         return;
//     }
// });

// let lib;
// this.libraryData.data.forEach(element => {
//     if (element.id == library_id) {
//         lib = element;
//         return;
//     }
// });