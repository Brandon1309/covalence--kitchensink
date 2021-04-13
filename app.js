// create vars of name and number of states in US
const name = "Brandon";
const numOfStates = 50;

// computing result of 5 + 4
let result = 5 + 4;



// alert Hello world
let sayHello = () => {
  alert("Hello World!");
}

//  tells if old enough to view page
let checkAge = (name, age) => {
  if (age < 21) {
    alert(`Sorry ${name}, you are NOT old enough to view this page`)
  } else {
    alert(`Hello ${name}, you ARE old enough to view this page`)
  }
}

// sayHello();

// checkAge("charels", 21);
// checkAge("Abby", 27);
// checkAge("James", 18);
// checkAge("John", 17);

let favoriteVegies = ["Watermelon", "Mushrooms", "Onions", "Bell Peppers"]

for (i in favoriteVegies) {
  console.log(favoriteVegies[i]);
}


let pet = {
  name: "Gus",
  breed: "cat"
}

console.log(" ");
console.log(pet.name);
console.log(pet.breed);


let objects = [{
  name: "Gus",
  age: 20
}, {
  name: "Cleetus",
  age: 35
}, {
  name: "Brandon",
  age: 27
}, {
  name: "bartholemue",
  age: 19
}, {
  name: "Kujo",
  age: 33
}, ]

// for (i = 0; i < objects.length; i++) {
//   checkAge(objects[i].name, objects[i].age);

// }

let getLength = (word) => {
  console.log(word.length)
  if (word.length % 2 === 0) {
    return "The world is nice and even!";
  } else {
    return "The world is an odd place";
  }
}

console.log(getLength("Hello World"))