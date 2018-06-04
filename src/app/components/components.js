import angular from 'angular';
import Home from './home/home.module';
import About from './about/about.module';

const componentModule = angular.module('app.components', [
  Home,
  About
])

  .name;

export default componentModule;
