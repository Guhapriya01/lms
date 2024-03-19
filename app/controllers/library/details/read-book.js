import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibraryDetailsReadBookController extends Controller {
    @service router;
    email = null;
    name = null;

    @action
    getBook() {
        if(!this.email || !this.name){
            alert("Enter all the details to proceed!");
            return;
        }
        alert("Successfully Sent Book to " + this.email);
        this.set('email', null);
        this.set('name', null);
        
        this.router.transitionTo('library.details.books');
    }
}

