export function findImc(altura, peso){
  return (peso/(altura*altura)).toFixed(2);
}