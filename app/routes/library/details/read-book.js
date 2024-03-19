import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LibraryDetailsReadBookRoute extends Route {
    @service router;

    @action
    willTransition(transition) {
        if (this.controller.userEnteredData && !confirm("Are you sure you want to abandon progress?")) {
            transition.abort();
        }
        else {
            this.controller.userEnteredData = false;
            this.controller.email = null;
        }
    }

    model({ readbook_id }) {
        let book;
        let library = this.modelFor('library.details');
        library.books.forEach(element => {
            if (element.id == readbook_id) {
                book = element;
                return
            }
        });
        console.log(book);
        if (!book) {
            this.router.transitionTo('not-found', "notfound");
        }
        return book;
    }
}