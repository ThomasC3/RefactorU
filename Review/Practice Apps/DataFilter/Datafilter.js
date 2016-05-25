angular.module('directoryApp', [])
    .controller('directoryController', function() {
    
    var dirList = this;
    
    dirList.toggle = false;
    
    dirList.list = [
        {name:'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'},
        {name:'Bill', age: 39, img:'https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg'}, 
        {name:'Courtney', age: 26, img:'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}, 
        {name:'Chris', age: 28, img:'https://s3.amazonaws.com/uifaces/faces/twitter/emirik/128.jpg'}
        ];
    dirList.addPerson = function() {
          dirList.list.push({name: dirList.name, age: dirList.age});
          dirList.name = '';
          dirList.age = 0;
        };
});
    
    
    