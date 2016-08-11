// =============================DEFINITION============================== //

// POKEMON CONSTRUCTOR { DATA PROPERTIES }
function Pokemon(name, hp, mp) { // do not include skill: internally updated
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.skill = [];
}

// POKEMON.PROTOTYPE.METHODPROPERTIES
Pokemon.prototype.learnAttackSkill = function(attackName) {
    this.skill.push(attackName);
};

Pokemon.prototype.showStatus = function() {
    console.log("Name: ", this.name, "\n");
    console.log("Health Points: ", this.hp, "\n");
    console.log("Magic Points: ", this.mp, "\n");
    console.log("Skills: ", this.skill, "\n");
};

Pokemon.prototype.attack = function(attackIndex, opponent) {
    // Get attack object
    var attackObj = this.skill[attackIndex];
    if (this.mp < attackObj.mp) {
        console.log("Not enough MP !");
    } else if (opponent.hp <= 0) {
        console.log("Your opponent already fainted !");
    } else {
        this.mp -= attackObj.mp;
        opponent.hp -= attackObj.dmg;
        console.log(this.name, attackObj.name, opponent.name , ": ", attackObj.dmg, " damage!" );
        console.log(this.name, "HP: ", this.hp, "MP: ", this.mp);
        console.log(opponent.name, "HP: ", opponent.hp, "MP: ", opponent.mp);
        if (opponent.hp <= 0) {
            console.log(opponent.name, "fainted...,", this.name, " won!!!")
        }
    }
};

Pokemon.prototype.getMagic = function(mp) {
    this.mp += mp;
};


// ATTACKSKILL CONSTRUCTOR
function AttackSkill(name, dmg, mp) {
    this.name = name;
    this.dmg = dmg;
    this.mp = mp;
}

// =========================INSTANTIATION================================= //
// INSTANTIATE OBJECTS
// POKEMONS: HAS TO BE AFTER FUNCTION DECLARATION. VARIABLE ASSIGNMENT NOT HOISTED
var pikachu = new Pokemon("Pikachu", 100, 100);
var bulbasaur = new Pokemon("Bulbasaur", 100, 100);

// ATTACKS
var tackle = new AttackSkill("Tackle", 10, 10)
var lightning = new AttackSkill("Lightning", 30, 25)
var powerWhip = new AttackSkill("Power Whip", 25, 20)

// SET METHOD PROPERTIES
pikachu.learnAttackSkill(tackle);
pikachu.learnAttackSkill(lightning);
pikachu.showStatus();

bulbasaur.learnAttackSkill(tackle);
bulbasaur.learnAttackSkill(powerWhip);
bulbasaur.showStatus();

pikachu.attack(1, bulbasaur);
pikachu.attack(1, bulbasaur);
pikachu.attack(1, bulbasaur);
pikachu.attack(1, bulbasaur);



