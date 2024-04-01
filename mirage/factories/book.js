import { Factory } from 'miragejs';

export default Factory.extend({
    name:(i)=>`Book ${i}`,
    author: (i)=>`Author ${i}`,
    publisher: (i)=>`Publisher ${i}`,
    publishedDate: "2004-04-11",
});
