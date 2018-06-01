class homeService {
  constructor($http) {
    'ngInject';
    this.name = 'homeService';
    this.$http = $http;
  }

  getEnvConfig() {
    return this.$http.get('conf.json')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default homeService;
