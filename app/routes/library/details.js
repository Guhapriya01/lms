import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LibraryDetailsRoute extends Route {
  @service data;
  @service router;

  async model({ library_id }) {
    let url = '/libraries/' + library_id;
    let data = await this.data.getData(url);

    if (!data) {
      this.router.transitionTo('not-found', 'notFound');
    }
    return data.library;
  }
}

// this.library.data.forEach(element => {
//     if (element.id == library_id) {
//         lib = element;
//         return;
//     }
// });

// let lib = fetch(`/libraries/${library_id}`).then((response)=>response.json()).then((r)=> r.data)
