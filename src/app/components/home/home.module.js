import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeService from './home.service';
import homeComponent from './home.component';
import homeConfig from './home.config';

const homeModule = angular.module('components.home', [
  uiRouter
])

  .config(homeConfig)

  .component('home', homeComponent)

  .service('homeService', homeService)

  .name;

export default homeModule;
