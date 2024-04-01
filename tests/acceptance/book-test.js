import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';

module('Acceptance | book', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /book', async function (assert) {
    await visit('/book');

    assert.strictEqual(currentURL(), '/book');
  });
});
