angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', configRoutes])

function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('map',{
      url: '/',
      templateUrl: 'app/map/map.html'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'app/account/account.html'

    })

    $urlRouterProvider.otherwise('/')
}
