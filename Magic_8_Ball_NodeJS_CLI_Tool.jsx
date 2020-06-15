//In this project we will build the Magic Eight Ball using control flow in JavaScript.
//The user will be able to input a question, then our program will output a random fortune.

let username ='';
let question ='';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber){
  case 0:
  eightBall='It is certain';
  break;
case 1:
eightBall='It is decidedly so';
break;
case 2:
eightBall='Reply hazy try again';
break;
case 3:
eightBall='Cannot predict now';
break;
case 4:
eightBall='Do not count on it';
break;
case 5:
eightBall='My sources say no';
break;
case 6:
eightBall='Outlook not so good';
break;
case 7:
eightBall='Signs point to yes';
break;
}

//// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
// To make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8.
// To ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().

const prompt = require('prompt');

const properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'question',
        hidden: false
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log(' Hello, ' + result.username);
    console.log('  You asked: ' + result.question);
    console.log('Magic 8 Ball Predicts: ' + eightBall);
});

function onErr(err) {
    console.log(err);
    return 1;
}
