import { Factory, association } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name: (i) => `Library ${i + 1}`,
  location: () => faker.location.city(),
  timing: '10.00 am TO 5.00 pm',
  afterCreate(library, server) {
    library.update({
      books: server.createList('book', 3),
    });
  },
  // books:association()
});
