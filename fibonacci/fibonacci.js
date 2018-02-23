var fibonacci = function(n) {
  let currentNum;
  let numList = [0,1];
  if (n > 0) {
    for (let i = 2; i <= n; i++) {
      currentNum = numList[i - 1] + numList[i - 2];
      numList.push(currentNum);
    }
  } else {
    return 'OOPS';
  }
  return numList[n];
}

module.exports = fibonacci
