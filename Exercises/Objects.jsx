//There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. 
//With the seventh type, objects, we open our code to more complex possibilities. 
//We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.
// At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice.

let spaceship = {}; // spaceship is an empty object

// We fill an object with unordered data. This data is organized into key-value pairs. 
// A key is like a variable name that points to a location in memory that holds a value.

// We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. 
// We separate each key-value pair in an object literal with a comma (,). 
// Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks.
// An object literal with two key-value pairs
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
  };

// Write your fasterShip object literal below
let fasterShip ={
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

  // With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
  };
  spaceship.homePlanet; // Returns 'Earth',
  spaceship.color; // Returns 'silver',

  // If we try to access a property that does not exist on that object, undefined will be returned.

  spaceship.favoriteIcecream; // Returns undefined

  // Create a variable with a value of the object’s property:
// const variableName = objectName.propertyName

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  const crewCount = spaceship.numCrew;
  
  const planetArray = spaceship.flightPath;

  // The second way to access a key’s value is by using bracket notation, [ ].
// You’ve used bracket notation when indexing an array:

['A', 'B', 'C'][0]; // Returns 'A'

// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. 

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
  };
  spaceship['Active Duty'];   // Returns true
  spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
  spaceship['numCrew'];   // Returns 5
  spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

  // With bracket notation you can also use a variable inside the brackets to select the keys of an object. 
  // This can be especially helpful when working with functions:

  let returnAnyProp = (objectName, propName) => objectName[propName];
  returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };

// let variableName = objectName['propertyName']
// Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.


  let propName =  'Active Mission';
  
  // Write your code below
  let  isActive = spaceship ['Active Mission'];

  // console.log() the value of the 'Active Mission' property
  
  console.log(spaceship['Active Mission']);

// Objects are mutable meaning we can update them after we create them.
// We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

// Although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// You can delete a property from an object with the delete operator.

const spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe' 
  };
  
  //delete objectName['Property Name'];
// delete objectName.propName;

  delete spaceship.mission;  // Removes the mission property

// Re-assign property
objectName['Property Name'] = 'New Property Value';
objectName.propName = 'New Prop Value';

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
// Write your code below
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 4;
  
  delete spaceship ['Secret Mission'];

// When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
//  For example console is a global javascript object and .log() is a method on that object. Math is also a global javascript object and .floor() is a method on it.

// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

  // Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

  alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

  // 

  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

// Don’t forget to separate your methods with commas just as you would any other key-value pairs:
let objectName = {
    methodName() {
      console.log('The methodName method was invoked!')
    }, 
    secondMethodName() {
       console.log('The secondMethodName method was invoked!')
  }
  };




