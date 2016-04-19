angular.module('myApp',[])
.controller('myctrl', ['$scope',myFunc]);
function myFunc($scope){
   $scope.doClick=function(){
   	$scope.pins=[]

// console.log('something')
   $scope.dropper=function() {
   	
   $scope.x = event.clientX;
   $scope.y = event.clientY;
   // var offsetX = event.offsetX;
   // var offsetY = event.offsetY;
   pins.push({'x':$scope.x, 'y': $scope.y});
   
   console.log(x, y);
   
   //$scope.marker = {
   //	'display':'inherit;'
   }
   	
   }
}


   // Here you forward the coordinates e.pageX, e
// angular.module("app", [])

// .controller("goldController",["$scope", troller]);

// function troller($scope) {
   
//     $scope.coords = function(event){
//     $scope.x = event.clientX;
//     $scope.y = event.clientY;
//     coords = "X coords: " + x + ", Y coords: " + y;
//     console.log(coords)
// 	}
// };
// } = function($scope){

// 	$scope.markers = []
	
// 	$scope.addMarker = function(event){
// 		$scope.markerBox = {
// 			xposition: (event.pageX - 24),
// 			yposition: (event.pageY - 24),
// 			//comment: prompt('enter a comment'),
// 			commentVisibility: false,
// 		}
// 		$scope.markers.push($scope.markerBox)
// 		console.log($scope.markers)
		
// 	}
	
// 	$scope.removeMarker = function(index){
// 		$scope.markers.splice(index,1) 
// 	}

// 	$scope.toggleComment = function(index) {
// 		$scope.markers[index].commentVisibility = !$scope.markers[index].commentVisibility
// 	}	
// }

// angular.module("app").controller("mainController", ["$scope", mainControllerFunc])