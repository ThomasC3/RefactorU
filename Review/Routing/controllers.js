(function () {
    angular.module('controllers',[])
        .controller('homeController', hController)
        
        function hController () {
        var hCTRL = this
        hCTRL.name = 'Home Controller'
            
        }
}())