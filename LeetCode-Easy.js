// 1. Concatenation of Array
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]


// Code:


// var getConcatenation = function(nums) {

// let n = nums.length;
//     let ans = new Array(2 * n);
//     for (let i = 0; i < n; i++) {
//         ans[i] = nums[i];
//         ans[i + n] = nums[i];
//     }
// return ans;
// };



// --------------------------------------------------------------------------------------------------------------------------------------------------------



// 2. Add Minimum Number of Rungs

// You are given a strictly increasing integer array rungs that represents the height of rungs on a ladder. You are currently on the floor at height 0, and you want to reach the last rung.

// You are also given an integer dist. You can only climb to the next highest rung if the distance between where you are currently at (the floor or on a rung) and the next rung is at most dist. You are able to insert rungs at any positive integer height if a rung is not already there.

// Return the minimum number of rungs that must be added to the ladder in order for you to climb to the last rung.

 

// Example 1:

// Input: rungs = [1,3,5,10], dist = 2
// Output: 2
// Explanation:
// You currently cannot reach the last rung.
// Add rungs at heights 7 and 8 to climb this ladder. 
// The ladder will now have rungs at [1,3,5,7,8,10].
// Example 2:

// Input: rungs = [3,6,8,10], dist = 3
// Output: 0
// Explanation:
// This ladder can be climbed without adding additional rungs.
// Example 3:

// Input: rungs = [3,4,6,7], dist = 2
// Output: 1
// Explanation:
// You currently cannot reach the first rung from the ground.
// Add a rung at height 1 to climb this ladder.
// The ladder will now have rungs at [1,3,4,6,7].

// Code:

// var addRungs = function(rungs, dist) {
//         let minRungsNeeded = 0;
//     let prevRung = 0;
    
//     for (let i = 0; i < rungs.length; i++) {
//         minRungsNeeded += Math.floor((rungs[i] - prevRung - 1) / dist);
//         prevRung = rungs[i];
//     }
    
//     return minRungsNeeded;

// };

// --------------------------------------------------------------------------------------------------------------------------------------------------------


// 3. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Code:

// var twoSum = function(nums, target) {
//     let n =nums.length
//     for(let i=0;i<n;i++){
//         for(let j=i+1; j<n;j++){
//            if(nums[i] + nums[j] === target){
//                return [i,j]
//            }
//         }
//     }
//     return []
// };


// --------------------------------------------------------------------------------------------------------------------------------------------------------


// 4. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
// Code:

// var isPalindrome = function(x) {
//  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;    let reversed = 0;
//     while (x > reversed) {
//         reversed = reversed * 10 + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     return x === reversed || x === Math.floor(reversed / 10);

// };


// --------------------------------------------------------------------------------------------------------------------------------------------------------


//5. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 


// Code:


// var romanToInt = function(s) {
//    const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }
//     let res = 0;
    
//     for(let i =0;i<s.length;i++){
//         let curentVal = map[s[i]]
//         let nextVal = map[s[i+1]]
//         if(curentVal<nextVal){
//             res -= map[s[i]]
//         }else{
//             res += map[s[i]]
//         }
            
//     }

//     return res
// };