import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | book', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /book', async function (assert) {
    await visit('/book');
    // logHelper('hello');
    // await this.pauseTest();

    assert.strictEqual(currentURL(), '/book');
  });

  test('mirage testing',async function (assert) {
    
    this.server.createList('library', 3);
    console.log(this.server.db);

    await visit('/book');

    // assert.dom('.book').exists();
    assert.ok(true);
  })
});
