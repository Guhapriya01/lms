import Route from '@ember/routing/route';

export default class LibraryDetailsBooksIndexRoute extends Route {
    queryParams = {
        sort: {
            refreshModel: true
        }
    }
    model(params) {
        let s = params.sort;
        let books = this.modelFor('library.details').books;

        let a = books.sort((a, b) => {
            if (s === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (s === 'desc') {
                return b.name.localeCompare(a.name);
            } else {
                return 0;
            }
        });
        console.log(books);
        console.log(a);
        return a;
    }
}
