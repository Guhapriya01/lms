import Route from '@ember/routing/route';

export default class LibraryDetailsBooksIndexRoute extends Route {
    model(){
        let books =this.modelFor('library.details').books;
        return books;
    }
}
