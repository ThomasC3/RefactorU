// Player based object//
function Player(name, hitpoints, attack) {
    this.name= name
    this.hitpoints = 100;
    this.attack = function attack(opponent) {
        opponent.hitpoints -= 10;
        console.log(this.name+" just hit "+opponent.name)
    }
}

//create new player instances// 
var p1 = new Player ()
var p2 = new Player ()

// name players //
p1.name = "Goku"
p2.name = "Majin Buu"

// Have Goku attack Majin Buu //
p1.attack(p2);
console.log(p2.name+" has "+p2.hitpoints+" hit points left")