import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryIndexRoute extends Route {

    @service('LibraryData') library;

    model(){  
        return this.library.data;
    }
}
