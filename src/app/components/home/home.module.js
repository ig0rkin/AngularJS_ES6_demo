import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';

let homeModule = angular.module('components.home', [
  uiRouter
])

.config(homeConfig)

.component('home', homeComponent)

.name;

export default homeModule;
