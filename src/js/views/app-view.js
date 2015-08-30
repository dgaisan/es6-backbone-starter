import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'lodash';
var { Model, View, Collection, Router, LocalStorage} = Backbone;

export class AppView extends View {

  initialize() {
    console.log('initializing view');
    this.events = {
      'click .newText': 'createNewText'
    };
  }

  constructor() {
    super();
    console.log('AppView Constructor');
    this.setElement($('#theapp'), true);
    this.template = _.template($('#text-template').html());
  }

  render() {
    console.log('re-rendering AppView');
  }

  createNewText() {
    console.log('new Text created!');
  }
}
