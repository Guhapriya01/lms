import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';
import {set} from '@ember/object';

module('Unit | Controller | library/details/read-book', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:library/details/read-book');
    assert.ok(controller);
  });

  test('checking getbook action', function (assert) {
    let controller = this.owner.lookup("controller:library/details/read-book");
    let router = this.owner.lookup("service:router");

    set(controller,'name','priya');
    set(controller,'email','priya@gmail.com');
    set(controller,'router',router);

    assert.equal(controller.name,'priya','name equal');
    // controller.getBook();
    // controller.send('getBooK');
    // console.log(controller);
  })
});
