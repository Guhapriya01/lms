import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryDetailsBooksBookRoute extends Route {
    @service router;
    model({ book_id }) {
        let book;
        let library = this.modelFor('library.details');
        library.books.forEach(element => {
            if (element.id == book_id) {
                book = element;
                return
            }
        });
        if (!book) {
            this.router.transitionTo('not-found', "notfound");
        }
        return book;
    }
}
