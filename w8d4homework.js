function titalize(array, cb) {
let title = array.map(names => `Mx ${name} Jingleheimer Schmidt `);
callback(title)
}

 titleize(["Mary", "Brian", "Leo"], (names) => {
     names.forEach(name => console.log(name))
 })


Elephant.prototype.trumpet = function() {
    console.log(`${this.name} is having a panic attack` )
}

Elephant.prototype.stressed = function() {
    this.stress_level = this.stress_level +100000
}

Elephant.prototype.play = function() {
    tricks = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name}is ${this.tricks[trickname]!}`)
}

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} will remember his master and trample them later`)
}

 let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};



let bfastOrder = dinerBreakfast();
"I'd like cheesy scrambled eggs please"

bfastOrder("chocolate chip pancakes");
"I'd like cheesy scrambled eggs and chocolate chip pancakes please."

bfastOrder("grits");
"I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."