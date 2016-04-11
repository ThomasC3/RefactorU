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

var displayData = function (list, value, i) {
  var li = document.createElement('li');
  var ul = document.createElement('ul');

  loopThrough(function (field) {
    if (field == 'name') {
      li.textContent = fields[field];
    } else {
      var listElement;
      listElement = document.createElement('li');
      listElement.textContent =  field + ": " + fields[field];
      ul.appendChild( listElement );
    }
  });

  li.appendChild( ul );
  list.appendChild(li);
};

for (type in types) {
  var numberOfPeople = prompt('How many ' + types[type] + 's?');
  for (var i = 1; i <= numberOfPeople; i++) {
    getData(types[type], i);
    displayData(document.getElementById(types[type] + '-info'), types[type], i);
  }
  document.getElementById('number-of-' + types[type] + 's').textContent =
  'Number of ' + types[type] + 's: ' + (numberOfPeople || 0);
}
