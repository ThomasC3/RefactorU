(function() {
  angular.module('golfApp', ['homeController', "discFactory", 'ui.router'])
        .config(routerConfig)

      function routerConfig($stateProvider, $urlRouterProvider){

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl as hCtrl'
          })

          .state('create', {
            url: '/create',
            templateUrl: 'partials/discform.html',
            controller: 'homeCtrl as hCtrl'
          })
          .state('edit', {
            url: '/edit/:id',
            templateUrl: 'partials/discform.html',
            controller: 'homeCtrl as hCtrl'
          })


          $urlRouterProvider.otherwise('/')
      }
}());
