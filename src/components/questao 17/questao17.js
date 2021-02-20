export function sumMatrixDiagonals(matrix){
  var matrixSize = matrix.length
  if(matrixSize != matrix[0].length) return alert("Matrix não quadrática.");

  var sumDiagonals = {main: 0, second: 0};

  for(var i = 0; i < matrixSize; i++){
    sumDiagonals.main += parseInt(matrix[i][i]);
    sumDiagonals.second += parseInt(matrix[i][matrixSize - i - 1]);
  }

  return sumDiagonals;
}