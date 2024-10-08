//Write your solutions in this file, don't forget to test your functions.
const countFromOne = (int) => {
    for (let x = 1; x <= int; x++){
      console.log(x)
    }
  }
  
  countFromOne(10)
  
  const countEveryOdd = (int) => {
    for (let x = 1; x <= int; x += 2){
      console.log(x)
    }
  }
  
  countEveryOdd(10)
  
  const isNegative = (int) => {
    if (int < 0){
      return true;
    } else {
      return false
    }
  }
  
  console.log(isNegative(10))
  console.log(isNegative(-5))
  
  const betweenFiveAndTwenty = (int) => {
    if (5 <= int <= 20){
      return true 
    }
  }
  
  console.log(betweenFiveAndTwenty(10))

  const sumOfThreeOrFive = () => {
    sum = 0
    for (let x = 1; x < 1000; x++){
      if (x % 3 == 0 || x % 5 == 0){
        sum += x
      }
    }
  
    console.log(sum)
  }
  
  sumOfThreeOrFive()
  
  const isAllLowerCase = (str) => {
        if (str.toLowerCase('')) {
            return true
        } else {
            return false
        }
    }

  
  console.log(isAllLowerCase('Hello'))
