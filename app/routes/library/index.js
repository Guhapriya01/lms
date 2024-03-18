import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryIndexRoute extends Route {
    @service('LibraryData') library;

    model(){
        this.library.data.forEach(element => {
            console.log(element);
        });
        return this.library.data;
    }
}
