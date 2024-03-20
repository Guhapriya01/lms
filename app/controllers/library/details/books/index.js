import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LibraryDetailsBooksIndexController extends Controller {
  queryParams = ['sort'];

  sort=null;

  // get sortedBooks() {
    
  //   let s = this.sort;
    
  //   if (s) {
  //     return this.model.sort((a, b) => {
  //       if (s === 'asc') {
  //         return a.name.localeCompare(b.name); 
  //       } else if (s === 'desc') {
  //         return b.name.localeCompare(a.name); 
  //       } else {
  //         return 0; 
  //       }
  //     });
  //   }
  //   else return this.model;
  // }
}
