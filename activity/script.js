let trainer = {
    name: "Ash Ketchum",
    age: 10,
    pokemon: ["Pikachu", "Charizard", "Greninja"],
    friends: {
      brock: ["Steelexx", "Marshtomp", "Crobat"],
      misty: ["Psyduck", "Horsea", "Staryu"]
    },
    talk: function() {
      console.log(`${trainer.name}: Pikachu! I choose you!`);
    }
};
console.log(trainer.name); 
console.log(`Age: ${trainer.age}`); 
console.log(`Pokemon: ${trainer.pokemon}`); 
console.log(`Friends: ${JSON.stringify(trainer.friends)}`);  

trainer.talk(); 

function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 4;
    this.attack = level * 2;
    this.tackle = function(target) {
      target.health -= this.attack;
      console.log(`${this.name} tackled ${target.name}`);
      console.log(`${target.name}'s health is now reduced to ${target.health}`);
      if (target.health <= 0) {
        target.faint();
      }
    };
    this.faint = function() {
      console.log(`${this.name} has fainted!`);
    };
  }

let pikachu = new Pokemon("Pikachu", 8);
let charmander = new Pokemon("Charmander", 10);
let squirtle = new Pokemon("Squirtle", 8);

console.log(`${pikachu.name} VS ${charmander.name}`);
console.log(`${pikachu.name} (lvl. ${pikachu.level}) - HP: ${pikachu.health} - Attack: ${pikachu.attack}`);
console.log(`${charmander.name} (lvl. ${charmander.level}) - HP: ${charmander.health} - Attack: ${charmander.attack}`);


let tackleButton = document.querySelector("#tackle-button");
tackleButton.addEventListener("click", function() {
    pikachu.tackle(charmander);
});