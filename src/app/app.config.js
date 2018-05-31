const appConfig = ($locationProvider, $urlRouterProvider) => {
  "ngInject";
  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');
};

// appConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

export default appConfig;
