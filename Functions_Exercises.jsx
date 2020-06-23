// In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together 
// and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function.
// A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

function getReminder() {
    console.log('Water the plants');
  }
  
  function greetInSpanish(){
    console.log('Buenas Tardes.');
  }
    
  // To call a function in your code, you type the function name followed by parentheses.

  sayThanks ();

//With name as a parameter, it can be used as a variable in the function body of sayThanks().

  function sayThanks(name) {
    console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
  }
  
  //A customer named Cole just purchased something from your online store. 
  // Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.
  sayThanks('Cole');

  // One of the features added in ES6 is the ability to use default parameters. 
  // Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function, 
  // or if the argument is undefined when called.

  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  // By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

  function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList();

  // To pass back information from the function call, we use a return statement. 
  // To create a return statement, we use the return keyword followed by the value that we wish to return. 

  function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

// The return keyword is powerful because it allows functions to produce an output.
  function monitorCount(rows, columns){
    return rows*columns; 
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);

// Define a function that converts the temperature from Celsius to Fahrenheit

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


// Let’s say we have a plant that we need to water once a week on Wednesdays. 
// We could define a function expression to help us check the day of the week and the plant needs to be watered.

const plantNeedsWater = function (day){
  if (day === 'Wednesday') {
  return true; }
  else {
    return false;
  }
  };
  console.log(plantNeedsWater('Tuesday'));

  // ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
  // Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters 
  // inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

  // JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body.
  // Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. 
  // However, if a function takes zero or multiple parameters, parentheses are required.
  // A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates 
  // will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. 
  //This is referred to as implicit return.

// So if we have a function:

const squareNum = (num) => {
  return num * num;
};

//  We can refactor the function to:

const squareNum = num => num * num;

// If a function looks like:

const greaterThanFive = (num) => {
  return num > 5 ? true : false;
};


const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

// To make it into a concise body, we would remove the parentheses, curly braces, and the return keyword:

const greaterThanFive = num =>  num > 5 ? true : false;

const plantNeedsWater = day => 
  day === 'Wednesday' ? true : false;

