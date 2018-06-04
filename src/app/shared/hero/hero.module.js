import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';

const heroModule = angular.module('shared.hero', [
  uiRouter
])

  .component('hero', heroComponent)

  .name;

export default heroModule;
