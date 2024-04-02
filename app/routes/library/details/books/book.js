import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LibraryDetailsBooksBookRoute extends Route {
  @service router;
  @service data;

  async model({ book_id }) {
    let library_id = this.paramsFor('library.details').library_id;
    let url = `/libraries/${library_id}/books/${book_id}`;
    let book = await this.data.getData(url);
    if (!book) {
      this.router.transitionTo('not-found', 'notfound');
    }
    return book;
  }
}

   // library.books.forEach(element => {
    //     if (element.id == book_id) {
    //         book = element;
    //         return
    //     }
    // });
    // let book = await fetch(`/books/${book_id}`).then((response) => response.json()).then((r) => r.data);
