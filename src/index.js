
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        array.push(matrix[i])
      } else {
        let d = matrix[i].sort((a, b) => b - a)
        array.push(d)
      }
    }
    let a = [].concat(...array);
    return a
  }
}
