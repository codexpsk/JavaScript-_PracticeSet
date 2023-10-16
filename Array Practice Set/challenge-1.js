// How to convert an array into a complex array JavaScript?

/*
if the original array is:
const arr = [2, 1, 2, 1, 1, 1, 1, 1];
and the number n is 4
then the output array should be:
const output = [ [ 2, 1 ], [ 2, 1, 1 ], [ 1, 1, 1 ] ];
*/

const arr = [2, 1, 2, 1, 1, 1, 1, 1];
const splitArray = (arr, num) => {
  return arr.reduce(
    (previousValue, currentValue, ind) => {
      let { sum, res } = previousValue;
      if (ind === 0) {
        return { sum: currentValue, res: [[currentValue]] };
      }
      if (sum + currentValue <= num) {
        res[res.length - 1].push(currentValue);
        sum += currentValue;
      } else {
        res.push([currentValue]);
        sum = currentValue;
      }
      return { sum, res };
    },
    {
      sum: 0,
      res: [],
    }
  ).res;
};
console.log(splitArray(arr, 4));
console.log(splitArray(arr, 5));
