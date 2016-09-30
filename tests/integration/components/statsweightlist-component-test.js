import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('statsweightlist-component', 'Integration | Component | statsweightlist component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{statsweightlist-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#statsweightlist-component}}
      template block text
    {{/statsweightlist-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
