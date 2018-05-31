const homeConfig = ($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
};

// homeConfig.$inject = ['$stateProvider'];

export default homeConfig;
