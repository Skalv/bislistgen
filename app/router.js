import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sw', function() {
    this.route('edit', {path: '/:sw_id'});
    this.route('add');
  });
});

export default Router;
