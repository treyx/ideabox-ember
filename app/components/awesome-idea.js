import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteIdea: function () {
      this.get('idea').destroyRecord();
    }
  }
});
