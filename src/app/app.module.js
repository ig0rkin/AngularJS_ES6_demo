import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Shared from './shared/shared.module';
import Components from './components/components';
import AppComponent from './app.component';
import AppConfig from './app.config';


angular.module('app', [
  uiRouter,
  Shared,
  Components
])
  .config(AppConfig)

  .component('app', AppComponent);
