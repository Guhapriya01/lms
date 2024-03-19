import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibraryDetailsReadBookController extends Controller {
    @service router;
    email = null;

    @action
    getBook() {
        alert("Successfully Sent Book to " + this.email);
        this.set('userEnteredData', false);
        this.set('email', null);
        this.router.transitionTo('library.details.books.book', this.model.id);
    }

    @action
    enteredData() {
        let val = event.target.value;
        if (val) {
            this.set('userEnteredData', true);
        } else {
            this.set('userEnteredData', false);
        }
    }
}

