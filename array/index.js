// Array

// How do you find the missing number in a given integer array of 1 to 100?

// function findNumber(arr,n){
    
//     // let n = arr.length()
//     let totalSum = (n * (n + 1)) / 2;
//     let arrSum = arr.reduce((acc, curr) => acc + curr, 0);
//     let missingNumber = totalSum - arrSum;
//     console.log(`Total Sum: ${totalSum}`);
//     console.log(`Array Sum: ${arrSum}`);
//     console.log(missingNumber);

// }

// findNumber([1,2,4,5,6,7,8,9,10],10)

// How do you find the duplicate number on a given integer array?

// function find_duplicate(nums){

//     nums.sort()
//     for(let i =0; i<nums.length;i++){
//         if (nums[i] == nums[i - 1]){
//             return nums[i]
//         }
//     }

// }

// let nums = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9, 10]
// let duplicate = find_duplicate(nums)
// console.log("Duplicate number is:", duplicate)


// var addRungs = function(rungs, dist) {
//     let minRungsNeeded = 0;
//     let prevRung = 0;

// for (let i = 0; i < rungs.length; i++) {
//     minRungsNeeded += Math.floor((rungs[i] - prevRung - 1) / dist);
//     console.log(`minRungsNeeded: ${Math.floor((rungs[i] - prevRung - 1)/dist)}`);
//     prevRung = rungs[i];
//     console.log(`prevRung: ${rungs[i]}`);
// }

// return minRungsNeeded;

// };

// addRungs([1,3,5,10],2)
