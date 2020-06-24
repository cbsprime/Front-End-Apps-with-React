// Using array methods, you will transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array secretMessage.
const removed = secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'program');
//console.log(secretMessage);

// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage [7] ='right';
// console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift('Programming');
// console.log(secretMessage);

// array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5, 'know');
// console.log(secretMessage);
// Use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));

// Output is:
// Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to program
