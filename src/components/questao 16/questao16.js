export function powerStepsWithPow(base, pow){
  var res = [], partial = 1;
  for(var i = 1; i <= pow; i++){
    partial = Math.pow(base, i);
    res.push(partial);
  }
  return alert(res);
}