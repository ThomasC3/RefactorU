angular.module('directoryApp', [])
    .controller('directoryController', function() {
    
    var dirList = this;
    
    dirList.toggle = false;
    
    dirList.list = [
        {name:'Scott', age: 29},
        {name:'Bill', age: 39}, 
        {name:'Courtney', age: 26}, 
        {name:'Chris', age: 28}
        ];
    dirList.addPerson = function() {
          dirList.list.push({name: dirList.name, age: dirList.age});
          dirList.name = '';
          dirList.age = 0;
        };
});
    
    
    