
function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name, nickname, race, origin, attack, defense,

    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },

    evaluateFight: function(character) {
      let x = Math.max(this.attack - character.defense, 0);
      let y = Math.max(character.attack - this.defense, 0);
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage.`);
    }
  }
}

let characterData = [
  ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6],
  ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1],
  ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2],
  ['Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8],
  ['Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5]
];

let characters = [];
for(let characterInfo of characterData) {
  characters.push(createCharacter(...characterInfo));
}

characters.push(createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 6, 8));

characters.find(character => character.nickname === "aragorn").describe();

let hobbits = characters.filter(character => character.race === "Hobbit")
console.log(`There are ${hobbits.length} hobbits.`)

let highAttack = characters.filter(character => character.attack > 5);
console.log(`There are ${highAttack.length} characters with an attack value above 5.`);
