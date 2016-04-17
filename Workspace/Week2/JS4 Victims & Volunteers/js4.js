
var field, fields = {
  'name': undefined,
  'number': undefined,
  'street': undefined
};
var type, types = ['victim', 'volunteer'];

var loopThrough = function (func) {
    for (field in fields) {
        func(field);
    }
};

var getData = function(value, i) {
    loopThrough(function(field){
        fields[field] = prompt(value + ' ' + i + ' - ' + field + ':');
        });
};

var displayData = function(list, value, i) {
   