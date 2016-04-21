angular.module("goldRush", []);

angular.module('goldRush')
   .controller('troller', ["$scope", findGold]);
      function findGold($scope) {
         //array holds marker cordinates 
         $scope.marker=[];
         //stores note
         
         //addes mark
         $scope.drop = function(){
           var x=event.pageX;
           var y=event.pageY;
         //var note =prompt(' Add note', '');
            // console.log(x,y);
          
               // $scope.submitNote = function () {
                  //pushing cords into marker arrays
                  $scope.marker.push({"x":event.pageX,"y":event.pageY})   
                  console.log($scope.marker)
                  
                  // $scope.notes=!$scope.notes
               
            //removes mark
         $scope.removeMarker = function(index, event) {
      $scope.marker.splice(index, 1)
      }
   }
}
