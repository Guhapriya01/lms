import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserPreferenceService extends Service {
  @tracked theme;

  constructor() {
    super(...arguments);
    let value = localStorage.getItem('theme');
    this.theme = value ? value : 'light';
  }

  setTheme(newTheme) {
    localStorage.setItem('theme', newTheme);
    this.theme = newTheme;

    // let date = new Date();
    // seetting expiry date of 30 days
    // date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    // document.cookie = `theme=${newTheme};expires=${date.toUTCString()}`;
  }

  // get theme() {
  //     // let cookieArr = document.cookie.split('; ');
  //     // let t = 'light';
  //     // if (cookieArr.length > 0) {
  //     //     cookieArr.forEach((cookie) => {
  //     //         let keyValue = cookie.split("=");
  //     //         if (keyValue[0] == 'theme') {
  //     //             t = keyValue[1];
  //     //         }
  //     //     })
  //     // }
  //     // return t;
  //     return localStorage.getItem("theme");
  // }
}
