import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryDetailsRoute extends Route {
    @service('LibraryData') library;
    @service router;

    model({ library_id }) {
        let lib;
        this.library.data.forEach(element => {
            if (element.id == library_id) {
                lib = element;
                return;
            }
        });
        if (!lib) {
            this.router.transitionTo('not-found', "notFound");
        }
        return lib;
    }
}
