import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryDetailsBooksBookRoute extends Route {
    @service router;
    @service data;

    model({ book_id }) {
        let library = this.modelFor('library.details');

        let url = `library/${library.id}/books/${book_id}`;
        let book = this.data.getData(url);
               
        // library.books.forEach(element => {
        //     if (element.id == book_id) {
        //         book = element;
        //         return
        //     }
        // });
        if (!book) {
            this.router.transitionTo('not-found', "notfound");
        }
        return book;
    }
}
