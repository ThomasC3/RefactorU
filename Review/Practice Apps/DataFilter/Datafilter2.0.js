angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
       $scope.list = [
           {name:'Scott', age: 29},
           {name:'Bill', age: 39},
           {name:'Courtney', age: 26},
           {name:'Chris', age: 28}
           ]
    });