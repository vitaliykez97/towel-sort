module.exports = function towelSort (matrix) { 
  
  if (typeof(matrix) === 'object'){
    var result = matrix[0]
    if (matrix.length !== 0){
        for (let i=1; i<matrix.length; i++){
        if ( i%2 === 0){
          result = result.concat(matrix[i])
        } else {
          result = result.concat(matrix[i].reverse())
        } 
      }
    } else { result = [] }
  } else { result = [] }


  console.log(result)
  console.log(typeof(result))
  return result;
}
