module.exports = function towelSort (matrix) {
  var result = matrix[0]
  for (let i=1; i<matrix.length; i++){
    if ( i%2 === 0){
      result = result.concat(matrix[i])
    } else {
      result = result.concat(matrix[i].reverse())
    }
  }
  
  console.log(result)
  return [];
}
