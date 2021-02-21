export function powerStepsWithWhile(base, pow){
  var res = [], partial = 1, i = 1;
  while(i <= pow){
    partial *= base;
    res.push(partial);
    i++;
  }
  return res;
}