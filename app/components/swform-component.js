import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSw(sw) {
      console.log(sw.toJSON());
      sw.save();
    }
  }

});
