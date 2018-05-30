import angular from 'angular';
import userService from './user.service';

let userModule = angular.module('shared.user', [])

.service('userService', userService)

.name;

export default userModule;
