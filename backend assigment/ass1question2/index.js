function isFactorial(num) {
  if (num < 1) return false;
  let fact = 1;
  let i = 1;
  
  while (fact < num) {
    i++;
    fact *= i;
  }

  return fact === num;
}

console.log(isFactorial(5)); 
console.log(isFactorial(7)); 
console.log(isFactorial(10))