// Exercise 2: Single Number

const singleNumber = function (nums) {
  // Start coding heres
  const numCount = {};
  
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] === 1) {
      return num; 
    }
  }
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
