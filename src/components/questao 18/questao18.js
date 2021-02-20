export function sumMatrixPairs(matrix){
  var sumPairs = {sum: 0};

  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] % 2 == 0){
        sumPairs.sum += parseInt(matrix[i][j]);
      }
    }
  }

  return sumPairs;
}