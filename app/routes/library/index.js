import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default class LibraryIndexRoute extends Route {
  // @service('LibraryData') library;

  model() {
    let data = fetch('/libraries')
      .then((response) => response.json())
      .then((r) => r.data);
    return data;
  }
}
