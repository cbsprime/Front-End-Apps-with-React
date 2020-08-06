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



