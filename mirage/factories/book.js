import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name: (i) => `Book ${i + 1}`,
  author: () => faker.person.firstName(),
  publisher: (i) => `Publisher ${i + 1}`,
  publishedDate: '2004-04-11',
});
