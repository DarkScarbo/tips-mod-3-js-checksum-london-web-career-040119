const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
];

function checksum() {
  rowsArray = data.map(
    rowArray => Math.max(...rowArray) - Math.min(...rowArray)
  );
  return rowsArray.reduce((a, b) => a + b);
}

checksum(data);
