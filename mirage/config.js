import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {

  this.get('/libraries')

  this.get('/libraries/:id')

  this.get('/libraries/:id/books', function (schema, request) {
    let id = request.params.id;
    let bookIds = schema.libraries.find(id).attrs.bookIds;
    let books = schema.books.find(bookIds);

    return this.serialize(books);
  })

  this.get('books/:id')

  this.passthrough('https://www.googleapis.com/books/v1/volumes');

}
