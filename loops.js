// For more info, watch the Shining...
function work(times) {
  for (i = 0; i < times; i++) {
    document.write(" oof ", "");
  }
}
// A function for calculating a factorial
function factorial(number) {
  var result = 1;
  for(i = number; i > 0; i--){
    result = result*i;
    console.log(result);
  }
  return result;
}
// Multiplies all the elements of an array by a number
function multiply(a, b){
  for(i = 0; i < a.length; i++){
    a[i] = a[i]*b;
    console.log(a[i]);
  }
  return a;
}
// Identifies all elements of an array as either even or odd
function evenOrOdd(numbers) {
  var results = [];
  for (i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      if (numbers[i] % 2 == 0) {
        results[i] = "even";
      }
      else {
        results[i] = "odd";
      }
    }
    else {
      results[i] = "Not an integer.";
    }
    console.log(results);
  }
  return results;
}
// Prints a stack of characters
function stack(num) {
  var sout = "";
  for (i = 1; i <= num; i++) {
    sout = sout + "<br/>";
    for (j = 1; j <= i; j++) {
      sout = sout + " * ";
    }
  }
  return sout;
}
// Example of do loop
function loopUntilTen() {
  var i = 0;
  do {
    i++;
    console.log("The number is " + i);
  }
  while (i < 10);
}
