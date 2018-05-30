const aboutConfig = ($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
};

export default aboutConfig;
