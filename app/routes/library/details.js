import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryDetailsRoute extends Route {
    // @service('LibraryData') library;
    // @service data;
    @service router;

    model({ library_id }) {
        // let url = "library/" + library_id;
        // let lib = this.data.getData(url);

        // this.library.data.forEach(element => {
        //     if (element.id == library_id) {
        //         lib = element;
        //         return;
        //     }
        // });

        let lib = fetch(`/libraries/${library_id}`).then((response)=>response.json()).then((r)=> r.data)
        
        if (!lib) {
            this.router.transitionTo('not-found', "notFound");
        }
        return lib;
    }
}
