// window.setTimeout(function () {
//   alert('HAMMER TIME!');
// }, 5000);

// function hammerTime (time) {
//   window.setTimeout(function () {
//     alert(`${time} is HAMMER TIME!`);
//   });
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

function teaAndBiscuits() {
    reader.question("Would you like some of that tea and biscuit stuff?", function(res)) {
        console.log(`Hell yeah, ${res}`);
        reader.quesion(`Want some more crap?`, function(res2)) {
            console.log(`Say what? ${res2}`);
            const first = (res === 'yes') ? "do" : "don't"
            const second =(res2 === 'yes') ? "do" : "don't"
            console.log(`So, you ${first} want tea and then you ${second} want biscuits? Scandalous`);
        };
    };
};


function Cat() {
    this.name = 'Watson'
    this.age = 10

}

function Dog() {
    this.name = 'Luke'
    this.age = 15
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Watson = new Cat ();
const Luke = new Dog ();