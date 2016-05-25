var peopleFactory = function(name, age, state) {
    
    var temp = {};
    
    temp.age = age;
    temp.name = name;
    temp.state = state;
    
    temp.printPerson = function(){
        console.log (this.name + '', '' + this.age + '', '' + this.state);
    }
    return temp;
}

    var person1 = peopleFactory('john', '23', 'CA');
    var person2 = peopleFactory( 'kim', '27', 'SC');
    
    person1.printPerson();
    person2.printPerson();
// JavaScript Factory //

var peopleConstructor= function(name, age, state){
    this.name= name;
    this.age = age;
    this.state = state;
    
    this.printPerson = function(){
        console.log( this.name + '', '' + this.age + '', '' + this.state);
    }
}

var person1 = new peopleConstructor('john', 23, 'CA')
var person2 = new peopleConstructor('Kim', 27, 'SC')

person1.printPerson()
person2.printPerson()

//  Javascript Constructor //

var peopleProto = function (){
    
};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function () {
    console.log(this.name + '', '' + this.age + '', '' + this.state)
}

var person1 = new peopleProto();
person1.name = 'john';
person1.age = 23;
person1.city

console.dir(peopleProto);



