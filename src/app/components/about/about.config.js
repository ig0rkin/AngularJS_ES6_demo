const aboutConfig = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
};

// aboutConfig.$inject = ['$stateProvider'];

export default aboutConfig;
