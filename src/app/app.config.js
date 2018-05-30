const appConfig = ($locationProvider, $urlRouterProvider) => {
  "ngInject";
  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');
};

export default appConfig;
