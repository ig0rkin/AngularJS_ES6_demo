import angular from 'angular';
import Navbar from './navbar/navbar.module';
import Hero from './hero/hero.module';
import User from './user/user.module';

let sharedModule = angular.module('app.shared', [
  Navbar,
  Hero,
  User
])

.name;

export default sharedModule;
