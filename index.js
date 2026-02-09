// Part 1
1;
const numArray = [1, 2, 3, 4, 5, 6];

function sum(numToSum) {
  let sum = 0;
  for (num of numToSum) {
    sum += num;
  }
  return sum;
}
let sumofNums = sum(numArray);
// console.log(sumofNums)

//2

function average(numToSum) {
  let sum = 0;
  for (num of numToSum) {
    sum += num;
  }
  let average = sum / numToSum.length;
  return average;
}
let averageofNums = average(numArray);
// console.log(averageofNums)

//3

const stringArray = ["Cat", "Dogs", "Numbers", "Shoelaces"];

function findLongestWord(arr) {
  let longest = arr.reduce(function (wordOne, wordTwo) {
    return wordOne.length > wordTwo.length ? wordOne : wordTwo;
  });
  return longest;
}

let longestWord = findLongestWord(stringArray);
// console.log(longestWord);

//4

let strArray = ["say", "hello", "in", "the", "morning"];

function stringsLongerThan(arr, num) {
  let longerWords = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      longerWords.push(arr[i]);
    }
  }

  return longerWords;
}

let result = stringsLongerThan(strArray, 3);
// console.log(result);

//5

let maxNum = 10;

function printNums(num) {
  if (num >= 0) {
    console.log(num);
    num -= 1;
    printNums(num);
  }
}

printNums(maxNum);
