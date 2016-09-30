import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  agi: attr('number'),
  int: attr('number'),
  sta: attr('number'),
  str: attr('number'),
  crit: attr('number'),
  haste: attr('number'),
  mast: attr('number'),
  vers: attr('number'),
  lee: attr('number'),
  avoid: attr('number')
});
