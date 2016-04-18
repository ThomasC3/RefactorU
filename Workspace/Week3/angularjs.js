console.log('Hello World', angular)

// first we need a to create a module
angular.module('startup', []) // created a module called startup
    // Need to use ng-app directive

// Then, create a controller
angular.module('startup') // Retrieves the already created module
    .controller('potatoTroller', ['$scope', potato])
    // Need to use ng-controller directive 
// potato represent our controller finction
function potato ($scope, $timoeout) {
    \$scope.greeting = "Hola brah"
}