// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments
// Edge cases: shouldn't beep with string, - number, and no number  


let mySchedule = process.argv.slice(2);

const alarm = function(array) {
  let numArr = [];
  array.forEach((element) => numArr.push(Number(element)));
  for (let value of numArr) {
    if (value >= 0) {
      setTimeout(() => {
        process.stdout.write(`\x07🔔🔔🔔 it has been ${value} second(s)\n`);
      }, value * 1000);
    }
  }
};

alarm(mySchedule);