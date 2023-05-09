let movie = {
    title: "Evil Dead",
    publisher: "Robert Tapert",
    year: 1981,
    director: "Sam Raimi",
    isAvailable: true
};
  
  console.log(movie)
  // accessing array items: array[index]
  // in object, keys and values together make up the object properties
  // accessing object properties: object.property
  console.log(movie.title); 
  
  /*
    Objects are data type that allows us to store collections of key - value pairs.

    They can represent real-world properties such person, car or more abstract concepts

    object literal = {}

*/
console.log(movie.publisher)

// re-assign array items: array[index] = <value>

// re-assign object properties
movie.title = 'Final Fantasy X'
console.log(movie.title)

movie.year = 2001
movie.producer = "Square Enix"
movie.director = 30

console.log(movie.year, movie.producer, movie.director);

// object can not only have primitive values but it can also have array and even objects

let course = {
    title: 'Philosophy',
    description: 'Learn values of life',
    price: 5000,
    isActive: true,
    instructors: ['Mr. Johnson', 'Ms. Smith', 'Mr. Frances']
};

console.log(course)
// access the array inside course
console.log(course.instructors)
// access the second item inside the instructors array
console.log(course.instructors[1])
// delete Mr. Frnacis from the array
course.instructors.pop()
console.log(course)

// add another instructor
course.instructors.push('Mr. McGee')
console.log(course.instructors)

let isPresent = course.instructors.includes('Mr. Johnson')
console.log(isPresent)

let instructor = {};
// if you re-assign value to a property that does not exist
// you are able to add a property with value in our object

instructor.name = 'James Johnson'
console.log(instructor);

instructor.age = 56
instructor.gender = "Male"
instructor.department = "Humanities"
instructor.courses = ["Philosophy 101", "Humanities 201"]
instructor.isActive = true
instructor.salary = 5000
console.log(instructor);

instructor. address = {
    street: '#1 Maginhawa Street',
    city: 'Quezon City',
    country: 'Philippines'
};

console.log(instructor)
// How will we access the street property of our instructor's address property?
console.log(instructor.address.street)

// Create objects using  constructor function

// In JavaScript, a 'constructor' function is a special type of function that is used to create and initialize objects.
// It is typically used in conjuction with ' new' key word to create new instance of an object on a template or blueprint

/*
    instance of an object is a unique occurence of an object that
    is created from a constructor function
        - when 'new' keyword
            - it create a new object and initializes it with the properties and methods defined in the constructor
*/
/*
    Create reusable function to create several objects with similar data sturcture or keys

    This is useful for creating multiple instance of objects

    'this' keyword hen used in a constructor function will allow us to assign a new object's properties and associating
    with the values received from a constructor function's parameter

    constructors are like blueprints or template to create our object from

*/

function Superhero(name, superpower, powerLevel){
    this.name = name;
    this.superpower = superpower;
    this.powerLevel = powerLevel;
}

let superhero1 = new Superhero('Saitama', 'One Punch', 300000)
console.log(superhero1)

let superhero2 = new Superhero('Wonder Woman', 'Super Strength', 2500000)
console.log(superhero2)

function Laptop(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
};

// without the new keyword we cannot instantiate a new laptop object from our constructor instead we can only invoke/call it
let laptop1 = new Laptop("MacBook Air", "Apple", 70000);
let laptop2 = new Laptop("Nitro 5", "Acer", 40000);

console.log(laptop1);
console.log(laptop2);

// Object Methods
/*
    A method is a function which is a property of an object

    In essence it is still a function, however, it is now associated with an object

    And to invoke or call the function we have to access the property which contains our functions

*/

    let person = {
        name: 'Shady',
        talk: function(){
            console.log(this)
            console.log(`Hi, my name is, what? My name is who? ${this.name}`)
        }
    }

    person.talk()

let person2 = {
    name: 'Jungkook',
    age: 26,
    address: {
        city: 'Asutin',
        state: 'Texas',
        country: 'USA'
    },
    friends: ['Jin', 'V', 'Jimin'],
    introduce: function(){
        console.log(`Hi my name is ${this.name}.
        I am ${this.age} years old.
        I live in ${this.address.city}, ${this.address.state}, ${this.address.country}
        and my friends are ${this.friends}`)
    },
    addFriend: function(str){
        console.log(str);
        this.friends.push(str)
        console.log(`my friends are now ${this.friends}`)
    },
    greet: function(obj){
        // console.log(obj);
        // Good day, <nameofPerson>!
        console.log(`Good day! ${obj.name}!`)
    }
}
person2.introduce()
person2.addFriend("Suga")
person2.introduce()
person2.greet(person)

// Mini Activity 4

function Student(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.isGreeted = false;
    //We can also add a method in our costructor
    this.greet = function(personToGreet){
        console.log(`Hello! ${personToGreet}`)
        // Can we re-assign the value of the argument's property?
        //Yes.
        personToGreet.isGreeted = true;
    }
};

let student1 = new Student("Shade Albios", "Maharlika", 21);
let student2 = new Student("Ervng Blitz", "Magallanes", 20);

console.log(student1);
console.log(student2);

student1.greet(student2)
console.log(student1)

// Arrays are special objects with method tht allows us to manipulate them.

let newArr = []
let homiePokemon = {
    name: 'Pikachu',
    lvl: 3,
    health: 100,
    attach: 50,
    tackle: function(){
        console.log('This Pokemon tackled targetPokemon');
        console.log('targetPokemon`s health is now low.' );
    },
    faint: function(){
        console.log('Pokemon fainted!')
    }
}
console.log(homiePokemon)
function Pokemon(name, level){
    //properties
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    //methods
    this.tackle = function(target){
        console.log(`${this.name} tackled  ${target.name}`)
        console.log(`targetPokemon's health is now reduce to _targetPokemonhealth_`);
    this.faint = function(){
        console.log(this.name + 'fainted.')
    }
    }
}

// Creates new instances pf the 'Pokemon' Object each with their unique properties
let pikachu = new Pokemon('Pikachu', 16);
let rattata = new Pokemon('Ratata', 8);

pikachu.tackle(rattata);
