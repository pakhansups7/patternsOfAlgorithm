// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// function reverseArray(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         let tmp = nums[left];
//         nums[left] = nums[right];
//         nums[right] = tmp;
//         left++;
//         right--;
//     }
// }

// function moveZeroes(nums) {
//     let read = 0;
//     let write = 0;
//
//     while (read < nums.length) {
//         if (nums[read] !== 0) {
//             const tmp = nums[read];
//             nums[read] = nums[write];
//             nums[write] = tmp;
//
//             write++;
//         }
//
//         read++;
//     }
// }


// function removeDuplicates(nums) {
//     let read = 1;
//     let write = 1;
//
//     while (read < nums.length) {
//         if (nums[read] !== nums[write - 1]) {
//             nums[write] = nums[read];
//             write++;
//         }
//         read++;
//     }
//     return write;
// }

// function twoSumSorted(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//
//     while (left < right) {
//         if (nums[left] + nums[right] === target) {
//             return [left, right];
//         } else if (nums[left] + nums[right] > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// function sqrSortedArray(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let result = [];
//     let write = nums.length - 1;
//
//     while (left <= right) {
//         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//             result[write] = nums[left]**2
//             left++;
//         } else {
//             result[write] = nums[right]**2
//             right--;
//         }
//         write--
//     }
//     return result;
// }


// function removeElement(nums, val) {
//     let read = 0;
//     let write = 0;
//
//     while (read < nums.length) {
//         if (nums[read] !== val) {
//             nums[write] = nums[read];
//             write++;
//         }
//         read++
//     }
//     return write;
// }


// function doubleTimesItem(nums) {
//     if (nums.length <= 2) {
//         return nums.length;
//     }
//
//     let read = 2;
//     let write = 2;
//
//     while (read < nums.length) {
//         if (nums[read] !== nums[write - 2]) {
//             nums[write] = nums[read];
//             write++;
//         }
//         read++;
//     }
//     return write;
// }


// function sortZeros(nums) {
//     let read = 0;
//     let write = 0;
//
//     while (read < nums.length) {
//         if (nums[read] !== 0) {
//             nums[write] = nums[read];
//             write++
//         }
//
//         read++;
//     }
//
//     while (write < nums.length) {
//         nums[write] = 0;
//         write++;
//     }
// }

// function compressChars(chars) {
//     let read = 0;
//     let write = 0;
//
//     while (read < chars.length) {
//         let currentChar = chars[read];
//         let count = 0;
//         while (read < chars.length && chars[read] === currentChar) {
//             read++;
//             count++;
//         }
//
//         chars[write] = currentChar;
//         write++;
//
//         if (count > 1) {
//             const countStr = count.toString();
//             for (let i = 0; i < countStr.length; i++) {
//                 chars[write] = countStr[i];
//                 write++;
//             }
//         }
//     }
//     return write;
// }


// function duplicateZeros(arr) {
//
//     let zerosCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zerosCount++;
//         }
//     }
//
//     let read = arr.length - 1;
//     let write = arr.length + zerosCount - 1;
//
//     while (read >= 0) {
//         if (arr[read] === 0) {
//             if (write < arr.length) {
//                 arr[write] = arr[read];
//             }
//             write--;
//             if (write < arr.length) {
//                 arr[write] = arr[read];
//             }
//             write--;
//             read--;
//         } else {
//             if (write < arr.length) {
//                 arr[write] = arr[read];
//             }
//             write--;
//             read--;
//         }
//     }
// }

// function validPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (!/[a-z0-9]/i.test(str[left])) {
//             left++;
//         } else if (!/[a-z0-9]/i.test(str[right])) {
//             right--;
//         } else {
//             if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//                 return false;
//             } else {
//                 left++;
//                 right--;
//             }
//         }
//     }
//     return true;
// }


// function containerWithMostArea (arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let maxArea = 0;
//
//     while (left < right) {
//
//         let width = right - left;
//         const currentHeight = Math.min(arr[left], arr[right]);
//         const area = width * currentHeight;
//
//         if (maxArea < area) {
//             maxArea = area;
//         }
//
//         if (arr[left] < arr[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return maxArea;
// }

// function threeSum(arr) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     let result = [];
//
//     for (let i = 0; i < sortedArr.length; i++) {
//         let left = i + 1;
//         let right = sortedArr.length - 1;
//         if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
//             continue;
//         }
//         while (left < right) {
//             let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
//
//             if (sum === 0) {
//                 result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
//                 left++;
//                 right--;
//
//                 while (left < right && arr[left] === arr[left - 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right + 1]) {
//                     right--;
//                 }
//
//             } else if (sum > 0) {
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             }
//         }
//     }
//     return result;
// }