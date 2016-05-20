(function() {
  angular.module('homeController', [])
    .controller('homeCtrl', homeCtrl)

    function homeCtrl (discMob, $state,$stateParams) {
      var hCtrl = this
      hCtrl.page = $state.current.name
      if(hCtrl.page == 'edit'){
        discMob.showOne($stateParams.id)
        .then(function(res) {
          console.log(res);
          hCtrl.newDisc= res.data
        })
      }
      console.log($state.current);
      discMob.showAll()
        .then(function(response){
          hCtrl.discs = response.data
        })

      hCtrl.submitDisc = function(disc) {
        discMob.create(disc)
          .then(function (res) {
            console.log("new disc : ", res)
          })
      }

      hCtrl.createDisc = function(){
        hCtrl.page = "create"
        $state.go('create')
      }
      hCtrl.editDisc = function(id){
        hCtrl.page = "edit"
        $state.go('edit', {id: id})
      }
    }
}());
