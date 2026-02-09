// Part 1
1.
const numArray = [1,2,3,4,5,6]

function sum(numToSum) {
    let sum =0;
    for(num of numToSum){
        sum += num;
    }
    return sum;
}
let sumofNums = sum(numArray)
// console.log(sumofNums)

//2

function average(numToSum) {
    let sum =0;
    for(num of numToSum){
        sum += num;
    }
        let average = sum/numToSum.length;
    return average;
}
let averageofNums = average(numArray)
// console.log(averageofNums)

//3

const stringArray = ['Cat', 'Dogs', 'Numbers', 'Shoelaces'];

function findLongestWord(arr){
    let longest = arr.reduce(
        function(wordOne, wordTwo){
            wordOne-wordTwo;
        }
    )
    return longest;
}

let longestWord = findLongestWord(stringArray)
console.log(longestWord)