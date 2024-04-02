import { module, test ,skip} from 'qunit';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NavBar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NavBar>
        template block text
      </NavBar>
    `);

    assert.dom().hasText('template block text');
  });

  test('user interaction ', async function(assert) {
    await render(hbs`<NavBar/>`);

    // assert.dom('#numLibraryReq').hasAnyText('0');
  
    await click('.buttonMode');
    // assert.dom('.buttonMode').hasText('dark');
    assert.dom('.buttonMode').hasText('light');

  })
});
