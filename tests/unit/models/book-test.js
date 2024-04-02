import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';
import { get } from '@ember/object';


module('Unit | Model | book', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('book', {});
    assert.ok(model);
  });

  test('testing relationships', function(assert){
    let Book = this.owner.lookup("service:store").modelFor("book");
    let library =get(Book,'relationshipsByName').get('library');
    
    // console.log(Book);
    // console.log(get(Book,'relationshipsByName'));

    assert.equal(library.key,'library','has relationship library')
  })
});
