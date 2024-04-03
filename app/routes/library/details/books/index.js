import Route from '@ember/routing/route';
import { sortBy } from '@ember/array';
import { inject as service } from '@ember/service';

export default class LibraryDetailsBooksIndexRoute extends Route {
  @service data;
  queryParams = {
    sort: {
      refreshModel: true,
    },
  };

  async model(params) {
    let s = params.sort;
    let library_id = this.paramsFor('library.details').library_id;
    let url = '/libraries/' + library_id + '/books';
    let books = await this.data.getData(url);

    return books.sort((a, b) => {
      if (s === 'asc') {
        return a.attributes.name.localeCompare(b.attributes.name);
      } else if (s === 'desc') {
        return b.attributes.name.localeCompare(a.attributes.name);
      } else {
        return 0;
      }
    });
  }
}

// if(s === 'asc') return books.sortBy('name');
// else if(s === 'desc') return books.sortBy('name').reverse();
// else return books;
// let books = await fetch(`/libraries/${library_id}/books`).then((response)=>response.json()).then((r)=>r.data);
// let books = this.modelFor('library.details').books.data.slice();