angular.module('myApp',[]) //setter
    .controller('myController', function($scope){
        $scope.name = 'myController'
        $scope.students = [
            {name:"batman"}
            {name:"batgirl"}
            {name:"batkid"}]
    })
