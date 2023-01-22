
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let matrixAll = [];
  let resultArr = [];
  let emptyArr = [];

  if (matrix == undefined) {
    return emptyArr;
  } else {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        matrixAll.push(matrix[i]);
      } else {
        matrixAll.push(matrix[i].reverse());
      }
    }
    matrixAll.forEach(element => {
      resultArr.push(...element);
    });
    return resultArr;
  }

}
