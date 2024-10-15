//Write your solutions in this file, don't forget to test your functions.
function countFromOne(int) {
  for (let x = 1; x <= int; x++) {
    console.log(x);
  }
}

function countEveryOdd(num) {
  for (let x = 1; x <= num; x++) {
    if (x % 3 == 0) {
      console.log(x);
    } else {
      continue;
    }
  }
}

function isNegative(int) {
  if (int < 0) {
    return true;
  } else {
    return false;
  }
}

function betweenFiveAndTwenty(int) {
  if (5 <= int <= 20) {
    return true;
  } else {
    return false;
  }
}

function sumOfThreeOrFive() {
  let sum = 0;
  for (let x = 0; x <= 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }

  return sum;
}

function isAllLowerCase(str) {
  if (str.toLowerCase === str) {
    return true;
  } else {
    return false;
  }
}

function countMultiplesOfFive(arr) {
  let mof = 0;
  for (x in arr) {
    if (x % 5 === 0) {
      mof += 1;
    }
  }

  return mof;
}
