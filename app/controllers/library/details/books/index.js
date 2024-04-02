import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LibraryDetailsBooksIndexController extends Controller {
  queryParams = ['sort'];
  sort;
  // @action
  //   action1(){
  //       //  document.getElementById('id1').addEventListener('click',function() {
  //       $('#id1').click(function(){
  //           Ember.run(function () {
  //             Ember.debug('In my own runloop');
  //             Ember.run.schedule('actions',function(){
  //               $('body').css('background-color', 'yellow');
  //             });

  //             Ember.run(function () {
  //               Ember.debug('In a nested runloop');
  //               $('body').css('background-color', 'red');
  //             });
  //           });
  //       })
  //   }

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
