import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { Response, createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
    // logging:false
  };

  return createServer(finalConfig);
}

function routes() {
  this.get('/libraries');

  this.get('/libraries/:id');

  this.get('/libraries/:id/books', function (schema, request) {
    let id = request.params.id;
    let bookIds = schema.libraries.find(id).attrs.bookIds;
    let books = schema.books.find(bookIds);
    return books;
  });

  this.get('/libraries/:id/books/:book_id', function (schema, request) {
    let id = request.params.id;
    let book_id = request.params.book_id;
    let bookIds = schema.libraries.find(id).attrs.bookIds;

    let book;
    bookIds.forEach((bookId) => {
      if (bookId == book_id) {
        book = schema.books.find(book_id);
      }
    });

    if (!book) {
      return new Response(500, {}, { error: 'Book not found' });
    }
    return book;
  });

  this.get('books/:id');

  this.passthrough('https://www.googleapis.com/books/v1/volumes');
}
