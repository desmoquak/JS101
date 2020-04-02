function isOdd(number)  {
  return Math.abs(number) % 2 === 1
 }
 console.log(isOdd(-2));    //false
 console.log(isOdd(1002));  //false
 console.log(isOdd(-97));   //true
 console.log(isOdd(21));    //true
 console.log(isOdd(100));   //false