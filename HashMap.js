// function lookForDuplicate(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (map[arr[i]] !== undefined) {
//             return true;
//         } else {
//             map[arr[i]] = 1;
//         }
//     }
//     return false;
// }
//
// console.log(lookForDuplicate([1, 2, 3, 1]));


// function firstUniqueChar(str) {
//     let result = {};
//     for (let i = 0; i < str.length; i++) {
//         if (result[str[i]] !== undefined) {
//             result[str[i]] += 1;
//         } else {
//             result[str[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         if (result[str[i]] === 1) {
//             return i;
//         }
//     }
//
//     return -1;
// }
// console.log(firstUniqueChar("leetcode"))
// console.log(firstUniqueChar("loveleetcode"))


// function canBuild(ransomNote, magazine) {
//     const object = {};
//     if (ransomNote.length > magazine.length) {
//         return false;
//     }
//
//     for (let i = 0; i < magazine.length; i++) {
//         let char = magazine[i];
//         if (object[char] !== undefined) {
//             object[char] += 1;
//         } else {
//             object[char] = 1;
//         }
//     }
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (object[ransomNote[i]] === 0 || object[ransomNote[i]] === undefined) {
//             return false;
//         } else {
//             object[ransomNote[i]]--;
//         }
//     }
//     return true;
// }
//
// console.log(canBuild('aa', 'aab'))


// function twoSum(nums, target) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         let complement = target - current;
//         if (map[complement] !== undefined) {
//             return [map[complement], i];
//         } else {
//             map[current] = i;
//         }
//     }
// }
//
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([4, 1, 6, 3], 9))


// function containsNearbyDuplicate(nums, k) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         let key = nums[i];
//
//         if (map[key] !== undefined) {
//             let distance = i - map[key];
//
//             if (distance <= k) {
//                 return true;
//             }
//         }
//             map[key] = i;
//     }
//     return false;
// }
//
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 2));

//2ое решение
// function containsNearbyDuplicate(nums, k) {
//     const lastIndexes = new Map();
//
//     for (let i = 0; i < nums.length; i++) {
//
//         const current = nums[i];
//
//         if (lastIndexes.has(current)) {
//
//             const previousIndex = lastIndexes.get(current);
//
//             if (i - previousIndex <= k) {
//                 return true;
//             }
//
//         }
//         lastIndexes.set(current, i);
//     }
//     return false;
// }

//3е решение
// function containsNearbyDuplicate(nums, k) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//
//         const current = nums[i];
//
//         if (Object.hasOwn(map, current)) {
//
//             const prevIndex = map[current];
//
//             if (i - prevIndex <= k) {
//                 return true;
//             }
//         }
//         map[current] = i;
//     }
//     return false;
// }


// function intersection(nums1, nums2) {
//     let result = [];
//     let obj = {};
//
//     for (let i = 0; i < nums1.length; i++) {
//         if (obj[nums1[i]] !== undefined) {
//             obj[nums1[i]] += 1;
//         } else {
//             obj[nums1[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < nums2.length; i++) {
//         if (obj[nums2[i]] > 0) {
//             result.push(nums2[i]);
//             obj[nums2[i]] = 0;
//         }
//     }
//     return result;
// }
//
// console.log(intersection([1, 2, 2, 1], [2, 2]))
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))


// function uniqDigits(arr) {
//     let obj = {};
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//        if (obj[arr[i]] === 1) {
//            result.push(arr[i]);
//        }
//     }
//     return result;
// }
// console.log(uniqDigits([1, 2, 2, 3, 4, 4, 5]))


// function findDuplicates(arr) {
//     let obj = {};
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] > 1) {
//             obj[arr[i]] = 1;
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));


// function firstDuplicate(arr) {
//     let obj = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             return arr[i];
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//
//     return null;
// }
// console.log(firstDuplicate([2, 5, 1, 3, 5, 2]));


// function firstUnique(arr) {
//     let obj = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] === 1) {
//             return arr[i];
//         }
//     }
//     return null;
// }
// console.log(firstUnique([4, 5, 1, 2, 1, 4, 5]));


// function mostFrequent(arr) {
//     let obj = {};
//     let tmp = 0;
//     let result = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] > tmp) {
//             tmp = obj[arr[i]];
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(mostFrequent([5, 5, 2, 2, 2, 7]));


// function sameElements(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//
//     let obj = {};
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (obj[arr1[i]] !== undefined) {
//             obj[arr1[i]] += 1;
//         } else {
//             obj[arr1[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr2.length; i++) {
//         if (obj[arr2[i]] === undefined || obj[arr2[i]] === 0) {
//             return false;
//         }
//         obj[arr2[i]] -= 1;
//     }
//     return true;
// }
// console.log(sameElements([1, 2, 2, 3], [2, 3, 2, 1]))


// function canBuildWord(word, letters) {
//     let obj = {};
//
//     for (let i = 0; i <  letters.length; i++) {
//         if (obj[letters[i]] !== undefined) {
//             obj[letters[i]] += 1;
//         } else {
//             obj[letters[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < word.length; i++) {
//         if (obj[word[i]] === undefined || obj[word[i]] === 0) {
//             return false;
//         }
//         obj[word[i]] -= 1;
//     }
//     return true;
// }
// console.log(canBuildWord("cat", "tacccc"));


// function hasCommonElement(arr1, arr2) {
//     let obj = {};
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (obj[arr1[i]] !== undefined) {
//             obj[arr1[i]] += 1;
//         } else {
//             obj[arr1[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr2.length; i++) {
//         if (obj[arr2[i]] !== undefined) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(hasCommonElement([1, 2, 3], [7, 8, 2]));


// function countCommonUnique(arr1, arr2) {
//     let obj = {};
//     let count = 0;
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (obj[arr1[i]] !== undefined) {
//             obj[arr1[i]] += 1;
//         } else {
//             obj[arr1[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr2.length; i++) {
//         if (obj[arr2[i]] !== undefined) {
//             if (obj[arr2[i]] > 0) {
//                 obj[arr2[i]] = 0;
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(countCommonUnique([1, 2, 2, 3, 4], [2, 2, 4, 5]))


// function countDistinct(arr) {
//     let obj = {};
//     let count = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] !== undefined) {
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] > 0) {
//             obj[arr[i]] = 0
//             count++;
//         }
//     }
//     return count;
// }
//
// console.log(countDistinct([1, 2, 3, 4, 5]));


// function isIsomorphic(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     let objS = {};
//     let objT = {};
//
//     for (let i = 0; i < s.length; i++) {
//         if (objS[s[i]] === undefined) {
//             objS[s[i]] = t[i];
//         } else {
//             if (objS[s[i]] !== t[i]) {
//                 return false;
//             }
//         }
//     }
//     for (let i = 0; i < t.length; i++) {
//         if (objT[t[i]] === undefined) {
//             objT[t[i]] = s[i];
//         } else {
//             if (obj[t[i]] !== s[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(isIsomorphic("egg", "add"))
// console.log(isIsomorphic("foo", "bar"))


// function groupAnagrams(words) {
//     let groups = {};
//
//     for (let i = 0; i < words.length; i++) {
//         let keyForWord = uniqKey(words[i]);
//         if (groups[keyForWord] === undefined) {
//             groups[keyForWord] = [words[i]];
//         } else {
//             groups[keyForWord].push(words[i]);
//         }
//     }
//     return Object.values(groups);
// }


// function uniqKey(word) {
//     let obj = {};
//     let resultStr = '';
//     for (let i = 0; i < word.length; i++) {
//         if (obj[word[i]] !== undefined) {
//             obj[word[i]] += 1;
//         } else {
//             obj[word[i]] = 1;
//         }
//     }
//
//     let sortedStr = Object.keys(obj).sort();
//
//     for (let i = 0; i < sortedStr.length; i++) {
//         resultStr += sortedStr[i] + obj[sortedStr[i]];
//     }
//     return resultStr;
// }
//
// console.log(uniqKey('eat'))


// function twoSum(nums, target) {
//     let obj = {};
//
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//
//         if (obj[complement] !== undefined) {
//             return [obj[complement], i];
//         } else {
//             obj[nums[i]] = i;
//         }
//     }
// }


// function countPairs(nums, target) {
//     let obj = {};
//     let count = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (obj[complement] !== undefined) {
//             count += obj[complement];
//         }
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else {
//             obj[nums[i]] = 1;
//         }
//     }
//     return count;
// }


// function longestConsecutive(nums) {
//     let obj = {};
//     let consecutive = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else{
//             obj[nums[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i] - 1] === undefined) {
//             let x = nums[i];
//             let xLen = 1;
//             while (obj[x + 1] !== undefined) {
//                 x++;
//                 xLen++;
//             }
//             if (xLen > consecutive) {
//                 consecutive = xLen;
//             }
//         }
//     }
//
//     return consecutive;
// }
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));


