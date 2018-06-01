class HomeController {
  constructor(homeService) {
    'ngInject';

    this.name = 'home';
    this.homeService = homeService;
  }

  $onInit() {
    console.log(this);
  }

  $onDestroy() {
    console.log('destroy');
  }

  click() {
    this.homeService.getEnvConfig();
  }
}

export default HomeController;
