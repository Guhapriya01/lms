import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LibraryDetailsReadBookRoute extends Route {
  @service router;
  @service data;

  @action
  willTransition(transition) {
    if (
      (this.controller.email || this.controller.name) &&
      !confirm('Are you sure you want to abandon progress?')
    ) {
      transition.abort();
    } else {
      this.controller.email = null;
      this.controller.name = null;
    }
  }

  async model({ readbook_id }) {
    let library_id = this.paramsFor('library.details').library_id;
    let url = `/libraries/${library_id}/books/${readbook_id}`;
    let data = await this.data.getData(url);

    if (!data) {
      this.router.transitionTo('not-found', 'notfound');
    }
    return data.book;
  }
}

// let book;
// let library = this.modelFor('library.details');
// library.books.forEach(element => {
//     if (element.id == readbook_id) {
//         book = element;
//         return
//     }
// });

// let book = await fetch(`/books/${readbook_id}`).then((response)=>response.json()).then((r)=>r.data);
