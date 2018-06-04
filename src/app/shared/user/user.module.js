import angular from 'angular';
import userService from './user.service';

const userModule = angular.module('shared.user', [])

  .service('userService', userService)

  .name;

export default userModule;
