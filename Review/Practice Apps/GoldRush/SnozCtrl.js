angular.module('WillyWonka', [])

angular.module('WillyWonka', [])
    .controller('snozBerries', ['wonkaFactory', snozBerries])
    
angular.module('WillyWonka', [])
    .controller('candyControl', [candyControl])
    
angular.module('WillyWonka')
    .controller('wonkaFactory', [wonkaFactory])
    
function snozBerries(wonkaFactory){

var snozCtrl = this
    snozCtrl.greeting = 'Hello'
}


function candyControl(wonkaFactory){
    var candyControl= this
    candyControl.greeting= 'YoYoYo'
    console.log('wonkydoo : ', wonkaFactory)
    candyCtrl.candies = wonkaFactory.candies
    
    $timeout(function)
}
function wonkaFactory (){
    
    var candies = [
        {
            name : 'Choco Balls',
            type : 'Chocolate'
            color : 'Brown'
            nuts : false
        }
         {
            name: 'Gobstoppers'
            type: 'Hard candy'
            color: 'Orange'
            nuts: false
        } {
            name: 'Almond Bar'
            type: 'Candy Bar'
            color: 'Almond'
            nuts: true
        } {
            name:
            type:
            color:
            nuts:
        }
        ]
    
    
    return {
        candy : ,
        oompaStaff :
    }
}
// JavaScript File