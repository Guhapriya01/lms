import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LibraryDetailsRoute extends Route {
  @service data;
  @service router;

  async model({ library_id }) {
    let url = '/libraries/' + library_id;
    let lib = await this.data.getData(url);

    if (!lib) {
      this.router.transitionTo('not-found', 'notFound');
    }
    return lib;
  }
}

// this.library.data.forEach(element => {
//     if (element.id == library_id) {
//         lib = element;
//         return;
//     }
// });

// let lib = fetch(`/libraries/${library_id}`).then((response)=>response.json()).then((r)=> r.data)