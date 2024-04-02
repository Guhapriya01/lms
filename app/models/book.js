import Model, { belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @belongsTo('library', { async: true, inverse: 'library' }) library;
}
