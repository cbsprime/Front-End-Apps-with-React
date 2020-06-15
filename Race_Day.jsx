// Write a program that will register runners for a race and give them instructions on race day.
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
//Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
//Late adults run at 11:00 am.
//Youth registrants run at 12:30 pm (regardless of registration).


let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age > 18 && registeredEarly){
  raceNumber+=1000;
}
if (age > 18 && registeredEarly){
console.log(`Your bib is ${raceNumber}. Your start time is 9:30 AM.`);
} else if (age>18 && !registeredEarly){
  console.log(`Your bib is ${raceNumber}. Your start time is 11:00 AM.`);
  }
if (age<18){
  console.log(`Your bib is ${raceNumber}. Your start time is 12:30 AM.`)
}
else {
console.log('See the registration desk.');
}
