import Route from '@ember/routing/route';

export default class LibraryIndexRoute extends Route {
  model() {
    let data = fetch('/libraries')
      .then((response) => response.json())
      .then((r) => r.libraries);
    return data;
  }
}
