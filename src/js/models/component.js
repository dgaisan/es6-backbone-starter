import Backbone from 'backbone';
import $ from 'jquery';
var {Model, Collection} = Backbone;

const IMAGE = 'image';
const TEXT = 'text';
const BUTTON = 'button';

export class Component extends Model {
  defaults() {
    return {
      type: TEXT,
      value: 'Enter your text'
    };
  }
}
