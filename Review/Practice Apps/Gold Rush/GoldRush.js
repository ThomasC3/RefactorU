angular.module("app", [])

var mainControllerFunc = function($scope){

	$scope.markers = []
	
	$scope.addMarker = function(event){
		$scope.markerBox = {
			xposition: (event.pageX - 24),
			yposition: (event.pageY - 24),
			//comment: prompt('enter a comment'),
			commentVisibility: false,
		}
		$scope.markers.push($scope.markerBox)
		console.log($scope.markers)
		
	}
	
	$scope.removeMarker = function(index){
		$scope.markers.splice(index,1) 
	}

	$scope.toggleComment = function(index) {
		$scope.markers[index].commentVisibility = !$scope.markers[index].commentVisibility
	}	
}

angular.module("app").controller("mainController", ["$scope", mainControllerFunc])