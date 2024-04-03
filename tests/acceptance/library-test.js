import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
module('Acceptance | library', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);


  test('visiting /library', async function (assert) {
    await visit('/library');

    assert.strictEqual(currentURL(), '/library');
  });

  test('mirage testing', async function (assert) {
    this.server.createList('library', 3);
    console.log(this.server.db);

    await visit('/library');

    assert.dom('.library').exists({count:3});
    assert.ok(true);
  });
});
