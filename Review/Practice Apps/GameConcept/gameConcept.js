// Player based object//
function Player() {
    this.name;
    this.hitpoints = 100;
    this.attack = function attack(opponent) {
        opponent.hitpoints -= 10;
        alert(this.name+" just hit "+opponent.name)
    }
}

//create new player instances// 
var p1 = new player ()
var p2 = new player ()

// name players //
p1.name = "Goku"
p2.name = "Majin Buu"

// Have Goku attack Majin Buu //
p1.attack(p2);
alert(p2.name+" has "+p2.hitpoints+" hit points left")