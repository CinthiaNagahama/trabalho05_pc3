export function findPrimesBetween(ini, fim){
  var primes = [], ehPrimo;
  for(let num = ini; num <= fim; num++){
    ehPrimo = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0){
        ehPrimo = false;
        break;
      }
    }
    if(ehPrimo){
      primes.push(num);
    }
  }
  return primes;
}