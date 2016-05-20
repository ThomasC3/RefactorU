(function() {
  angular.module('discFactory', [])
    .factory('discMob', discMob)

    function discMob ($http) {
      var dMob = {}

      dMob.create = function(disc){
        console.log("from factory",disc)
          return $http.post('/api/discs', disc)
      }
      dMob.update = function(disc, id){
          return $http.put('/api/discs/'+id, disc)
      }
      dMob.delete = function(id){
          return $http.delete('/api/discs/'+id)
      }
      dMob.showAll = function(){
          return $http.get('/api/discs')
      }
      dMob.showOne = function(id){
          return $http.get('/api/discs/'+id)
      }
      return dMob
    }


}());
