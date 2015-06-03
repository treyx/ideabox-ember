import DS from 'ember-data';

let Idea = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Idea.reopenClass({
  FIXTURES: [
    { id: 1, title: "First Idea", body: "First Lorem Ipsum" },
    { id: 2, title: "Second Idea", body: "Second Lorem Ipsum" }
  ]
});

export default Idea;
