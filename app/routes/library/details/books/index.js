import Route from '@ember/routing/route';
import { sortBy } from '@ember/array'; 

export default class LibraryDetailsBooksIndexRoute extends Route {
    queryParams = {
        sort: {
            refreshModel: true
        }
    }
    
    async model(params) {
        let s = params.sort;
        let library_id = this.paramsFor('library.details').library_id;
        let books = await fetch(`/libraries/${library_id}/books`).then((response)=>response.json()).then((r)=>r.data);
                
        // let books = this.modelFor('library.details').relationships.books.data.slice();
        return books.sort((a, b) => {
            if (s === 'asc') {
                return a.attributes.name.localeCompare(b.attributes.name);
            } else if (s === 'desc') {
                return b.attributes.name.localeCompare(a.attributes.name);
            } else {
                return 0;
            }
        });

        // if(s === 'asc') return books.sortBy('name');
        // else if(s === 'desc') return books.sortBy('name').reverse();
        // else return books;
    }
}
