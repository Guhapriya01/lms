import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
    include:['books']
});
