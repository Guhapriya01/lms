import Model, { attr, hasMany } from '@ember-data/model';

export default class LibraryModel extends Model {
  @attr name;
  @attr location;
  @attr timing;
  @hasMany('book', { async: true ,inverse: 'book' }) books;
}
