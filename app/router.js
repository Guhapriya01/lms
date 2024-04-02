import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('library', function () {
    this.route('details', { path: '/:library_id' }, function () {
      this.route('books', function () {
        this.route('book', { path: '/:book_id' });
      });
      this.route('read-book', { path: '/read/:readbook_id' });
    });
  });
  this.route('not-found', { path: '/*path' });
  this.route('latest-books');
});
