const homeConfig = ($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
};

export default homeConfig;
