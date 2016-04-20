/* global angular */
angular.module("goldRush", []);

angular.module('goldRush')
   .controller('troller', ["$scope", findGold]);
      function findGold($scope) {
         $scope.marker=[];
         $scope.addNote=[];
         $scope.drop = function(){
            var x =event.pageX;
            var y =event.pageY;
               console.log(x,y);
               
               if (mouse.event)
               $scope.addNote = function () {
                  
               }
               //pushes addNote to array//
               $scope.submitNote= function () {
                  
               }
            $scope.marker.push({"x":event.pageX,"y":event.pageY})
            console.log($scope.marker)
            
            $scope.removeMarker = function(index, event) {
               console.log(index, event)
               $scope.marker.splice(index,1)
            }
         }
   }