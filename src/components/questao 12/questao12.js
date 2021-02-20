export function invert(str) {
  var invertedString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}