(function() {

angular.module('pokeApp',[]) //setter
    .controller('pokeController', pokeCtrl)
        
        pokeCtrl.$inject = ['$http']
        
        function pokeCtrl ($http){
            var pCtrl = this
            pCtrl.text = 'PokeApp'
            
            pCtrl.searchPokemon = function(){
            $http.get('https://pokeapi.co/api/v2/pokemon/' + pCtrl.pokeName)
            .then(function(response){
                console.log("response from pokeApi", response.data)
                pCtrl.pokemon = response.data
                
            })
            }
            
            // pCtrl.searchPokemon = function(){
            // $http.get('https://pokeapi.co/api/v2/pokemon/' + pCtrl.pokeName)
            // .then(function(response){
            //     console.log("response from pokeApi", response.data)
            //     pCtrl.pokedex = response.data.pokemon_entries
            //     console.log(pCtrl.pokedex)
            // });
        }
}())
// JavaScript File