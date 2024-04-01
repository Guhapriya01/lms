import { Factory ,association} from 'miragejs';

export default Factory.extend({
    name: (i) => `Library ${i}`,
    location: (i) => `Location ${i}`,
    timing: "10.00 am TO 5.00 pm",
    afterCreate(library, server) {
        library.update({
            books : server.createList('book',3)
        })
    }
    // books:association()
});
