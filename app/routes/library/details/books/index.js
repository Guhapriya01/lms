import Route from '@ember/routing/route';
import { pushObject, sortBy } from '@ember/array'; 

export default class LibraryDetailsBooksIndexRoute extends Route {
    queryParams = {
        sort: {
            refreshModel: true
        }
    }
    model(params) {
        let s = params.sort;
        let books = this.modelFor('library.details').books.slice();
        
        return books.sort((a, b) => {
            if (s === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (s === 'desc') {
                return b.name.localeCompare(a.name);
            } else {
                return 0;
            }
        });

        // if(s==='asc') return books.sortBy('name');
        // else if(s==='desc') return books.sortBy('name').reverse();
        // else return books;
    }
}
