//  In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

//  In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

//  In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 8;
    case 'Tuesday':
    return 8;
    case 'Wednesday':
      return 7.5;
    case 'Thursday':
      return 6.5;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 7;
    case 'Sunday':
      return 8;
    default:
      return "Error";
  }
};

console.log(getSleepHours('Sunday')); // should print the # hours assigned to Sunday

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
};
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) 
{
console.log('You got the perfect amount of sleep.');
}
else if (actualSleepHours > idealSleepHours)
{
  console.log("You got " + (actualSleepHours -idealSleepHours) + " more hours of sleep than you need this week.");

}
else if (actualSleepHours < idealSleepHours)
{
  console.log("You should get some rest because you slept " + (idealSleepHours - actualSleepHours) + " hours less than you need this week.");
}
else
{
console.log('Error! Something went wrong.')
}
};
calculateSleepDebt ()