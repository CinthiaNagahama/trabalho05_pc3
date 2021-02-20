export function findPrime(pos){
  var prime, ehPrimo;
  for(let num = 1, countPrimes = 1; countPrimes <= pos; num++){
    ehPrimo = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0){
        ehPrimo = false;
        break;
      }
    }
    if(ehPrimo){
      prime = num;
      countPrimes++;
    }
  }
  return prime;
}