var exArray = [1, 10, 2, 5, 9];

function sumArray(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
};

sumArray(exArray);