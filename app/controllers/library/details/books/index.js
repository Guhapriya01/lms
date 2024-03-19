import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LibraryDetailsBooksIndexController extends Controller {
    queryParams =['sort'];

    @tracked
    sort=null;

    get sortedBooks(){
        let s = this.sort;
        if (s) {
          return this.model.sort((a, b) => {
            if ( s=='asc' && a.name > b.name ){
                return 1;
            }
            else if ( s=='desc' && a.name < b.name ){
                return 1;
            }
          });
        } 
        return this.model;
    }
}
