import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action, set, get } from '@ember/object';
import $ from 'jquery';

export default class NavBarComponent extends Component {
  @service data;
  @service userPreference;

  //  constructor(){
  //   super(...arguments);
  //   fetch('/library').then(r=>r.json()).then(d=>{
  //     console.log(d);
  //   });

  // }

  get libraryReq() {
    return this.data.libraryReq;
  }

  get booksReq() {
    return this.data.booksReq;
  }

  get theme() {
    let t = this.userPreference.theme;

    // setting body colour
    let backgroundColour = t == 'dark' ? 'grey' : 'white';
    let colour = t == 'dark' ? 'white' : 'black';
    $('body').css('background-color', backgroundColour);
    $('body').css('color', colour);

    return t;
  }

  @action
  changeTheme() {
    let t = this.theme == 'dark' ? 'light' : 'dark';
    this.userPreference.setTheme(t);
  }

  // @action
  // changeColour(){
  //     let backgroundColour = this.theme  == 'dark' ? 'grey' : 'white';
  //     let colour = this.theme  == 'dark' ? 'white' : 'black';
  //     $('body').css('background-color', backgroundColour);
  //     $('body').css('color', colour);
  // }
}
