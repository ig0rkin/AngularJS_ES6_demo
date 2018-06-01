class HomeController {
  constructor(homeService) {
    'ngInject';

    this.name = 'home';
    this.homeService = homeService;
  }

  $onInit() {
    this.homeService.getEnvConfig();
  }
}

export default HomeController;
