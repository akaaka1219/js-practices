#!/usr/bin/env node
for (let fund = 1; fund < 21; fund++) {
  if (fund % 3 == 0 && fund % 5 == 0) {
    console.log("FizzBuzz");
  } else if (fund % 5 == 0) {
    console.log("Buzz");
  } else if (fund % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(fund);
  }
}