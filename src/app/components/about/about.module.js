import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aboutConfig from './about.config';

let aboutModule = angular.module('components.about', [
  uiRouter
])

.config(aboutConfig)

.component('about', aboutComponent)

.name;

export default aboutModule;
