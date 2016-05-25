(function () {
    angular.module('myRouterApp',['ui.router', 'controllers'])
    .config(routerConfig)
    
    function routerConfig($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Home.html'
            controller: 'homeController as hCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html'
            controller: 'homeController as hCtrl'
        $urlRouterProvider.otherwise('/')
    }

    
}())

