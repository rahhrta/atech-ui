angular.module('app').config(RoutesConfiguration);

function RoutesConfiguration($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      mainContent: {
        templateUrl: 'app/controllers/contentView.html'
      },
      header: {
        templateUrl: 'app/controllers/headerView.html'
      },
      'content@home': {
        templateUrl: 'app/controllers/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
    }
  });
}
