import {AppView} from './views/app-view';
import $ from 'jquery';
import Backbone from 'backbone';

$( () => {
  console.log('Starting up the application!');
  new AppView().render();
  Backbone.history.start();
});
