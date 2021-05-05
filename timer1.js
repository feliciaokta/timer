// computer will perform a system sound
// process.stdout.write('\x07');

// edge cases
// 1. should not beep when no numbers are provided
// 2. ignore any input with negative numbers
// 3. ignore if input is NaN

let input = 0;

const alarmClock = function(input) {
  if (input > 0 || input !== NaN) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, input * 1000);
  } else {
    return "";
  }
};

console.log(alarmClock(4));