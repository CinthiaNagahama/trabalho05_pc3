export function multiplosDe3Ou5(max){
  var array = new Array();
  for(let i = 3; i <= max; i++){
    if(i % 3 == 0 || i % 5 == 0){
      array.push(i);
    }
  }
  return array;
}