export function powerStepsWithFor(base, pow){
  var res = [], partial = 1;
  for(var i = 1; i <= pow; i++){
    partial *= base;
    res.push(partial);
  }
  return res;
}