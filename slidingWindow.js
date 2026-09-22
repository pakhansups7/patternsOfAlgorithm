// function slidingWindow(nums, k) {
//     let sumOfWindow = 0;
//     for (let i = 0; i < k; i++) {
//         sumOfWindow += nums[i];
//     }
//
//     let result = sumOfWindow;
//
//     for (let i = k; i < nums.length; i++) {
//         let outgoingIndex = i - k;
//         sumOfWindow = sumOfWindow - nums[outgoingIndex] + nums[i];
//         result = Math.max(result, sumOfWindow);
//     }
//     return result;
// }

// function maxVowels(s, k) {
//     const vowels = {
//         a: true,
//         e: true,
//         i: true,
//         o: true,
//         u: true
//     };
//     let vowelCount = 0;
//
//     for (let i = 0; i < k; i++) {
//         if (vowels[s[i]]) {
//             vowelCount++;
//         }
//     }
//
//     let maxVowelsCount = vowelCount;
//
//     for (let i = k; i < s.length; i++) {
//         const outgoingIndex = i - k;
//         if (vowels[s[outgoingIndex]]) {
//             vowelCount--;
//         }
//         if (vowels[s[i]]) {
//             vowelCount++;
//         }
//         maxVowelsCount = Math.max(maxVowelsCount, vowelCount);
//     }
//     return maxVowelsCount;
// }


// function maxDistinctWindowSum(nums, k) {
//     let obj = {};
//     let maxSum = 0;
//     let windowSum = 0;
//     let distinctCount = 0;
//
//     for (let i = 0; i < k; i++) {
//         windowSum += nums[i];
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else {
//             obj[nums[i]] = 1;
//             distinctCount++;
//         }
//     }
//     if (distinctCount === k) {
//         maxSum = windowSum;
//     }
//
//     for (let i = k; i < nums.length; i++) {
//
//         const outgoingIndex = i - k;
//         const outgoingValue = nums[outgoingIndex];
//
//         windowSum -= outgoingValue;
//         obj[outgoingValue]--;
//
//         if (obj[outgoingValue] === 0) {
//             delete obj[outgoingValue];
//             distinctCount--;
//         }
//
//         windowSum += nums[i];
//
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else {
//             obj[nums[i]] = 1;
//             distinctCount++;
//         }
//
//         if (distinctCount === k) {
//             if (maxSum < windowSum) {
//                 maxSum = windowSum;
//             }
//         }
//     }
//     return maxSum;
// }

// function countDistinctInWindows(nums, k) {
//     let obj = {};
//     let result = [];
//     let distinctCount = 0;
//
//     for (let i = 0; i < k; i++) {
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else {
//             obj[nums[i]] = 1;
//             distinctCount++;
//         }
//     }
//     result.push(distinctCount);
//
//     for (let i = k; i < nums.length; i++) {
//         const outgoingIndex = i - k;
//         const outgoingValue = nums[outgoingIndex];
//
//         obj[outgoingValue] -= 1;
//
//         if (obj[outgoingValue] === 0) {
//             delete obj[outgoingValue];
//             distinctCount--
//         }
//
//         if (obj[nums[i]] !== undefined) {
//             obj[nums[i]] += 1;
//         } else {
//             obj[nums[i]] = 1;
//             distinctCount++;
//         }
//         result.push(distinctCount);
//     }
//     return result;
// }


// function minSubArrayLen(nums, target) {
//     let leftBorder = 0;
//     let windowSum = 0;
//     let minWindowLength = Infinity;
//
//     for (let i = 0; i < nums.length; i++) {
//         windowSum += nums[i];
//         while (windowSum >= target) {
//             minWindowLength = Math.min(i - leftBorder + 1, minWindowLength);
//             windowSum -= nums[leftBorder];
//             leftBorder += 1;
//         }
//     }
//     if (minWindowLength === Infinity) {
//         return 0;
//     }
//     return minWindowLength;
// }


// function maxSubArrayLen(nums, limit) {
//     let leftBorder = 0;
//     let windowSum = 0;
//     let maxWindowLength = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         windowSum += nums[i];
//         while (windowSum > limit) {
//             windowSum -= nums[leftBorder];
//             leftBorder += 1;
//         }
//         maxWindowLength = Math.max(i - leftBorder + 1, maxWindowLength);
//     }
//     return maxWindowLength;
// }


// function maxZerosLength(arr, k) {
//
//     let leftBorder = 0;
//     let windowLength = 0;
//     let count = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             count++;
//         }
//         while (count > k) {
//             if (arr[leftBorder] === 0) {
//                 count -= 1;
//             }
//             leftBorder++;
//         }
//         windowLength = Math.max(i - leftBorder + 1, windowLength);
//     }
//     return windowLength;
// }


// function lengthOfLongestSubstring(s) {
//     let leftBorder = 0;
//     let windowLength = 0;
//     let countOfElement = {};
//
//     for (let i = 0; i < s.length; i++) {
//         if (countOfElement[s[i]] !== undefined) {
//             countOfElement[s[i]] += 1;
//         } else {
//             countOfElement[s[i]] = 1;
//         }
//
//         while (countOfElement[s[i]] > 1) {
//             countOfElement[s[leftBorder]] -= 1;
//             leftBorder++;
//         }
//         windowLength = Math.max(i - leftBorder + 1, windowLength);
//     }
//     return windowLength;
// }


// function lengthOfLongestSubstringKDistinct(s, k) {
//     let leftBorder = 0;
//     let longestSubstr = 0;
//     let obj = {};
//     let count = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         if (obj[s[i]] !== undefined) {
//             obj[s[i]] += 1;
//         } else {
//             obj[s[i]] = 1;
//             count++;
//         }
//         while (count > k) {
//             obj[s[leftBorder]] -= 1;
//             if (obj[s[leftBorder]] === 0) {
//                 delete obj[s[leftBorder]];
//                 count--;
//             }
//             leftBorder++;
//         }
//         longestSubstr = Math.max(i - leftBorder + 1, longestSubstr);
//     }
//     return longestSubstr;
// }


// function checkInclusion(pattern, text) {
//     let objText = {};
//     let objPattern = {};
//
//     if (pattern.length > text.length) {
//         return false;
//     }
//
//     for (let i = 0; i < pattern.length; i++) {
//         if (objPattern[pattern[i]] !== undefined) {
//             objPattern[pattern[i]] += 1;
//         } else {
//             objPattern[pattern[i]] = 1;
//         }
//
//         if (objText[text[i]] !== undefined) {
//             objText[text[i]] += 1;
//         } else {
//             objText[text[i]] = 1;
//         }
//     }
//
//     if (haveSameFrequencies(objPattern, objText)) {
//         return true;
//     }
//
//     for (let i = pattern.length; i < text.length; i++) {
//         let index = i - pattern.length;
//         let element = text[index];
//
//         objText[element] -= 1;
//
//         if (objText[element] === 0) {
//             delete objText[element];
//         }
//
//         if (objText[text[i]] !== undefined) {
//             objText[text[i]] += 1;
//         } else {
//             objText[text[i]] = 1;
//         }
//
//         if (haveSameFrequencies(objPattern, objText)) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// function haveSameFrequencies(obj1, obj2) {
//     for (const key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }


// function findAnagrams(pattern, text) {
//     let result = [];
//     let patternObj = {};
//     let textObj = {};
//
//     if (pattern.length > text.length) {
//         return [];
//     }
//
//     for (let i = 0; i < pattern.length; i++) {
//         if (patternObj[pattern[i]] !== undefined) {
//             patternObj[pattern[i]] += 1;
//         } else {
//             patternObj[pattern[i]] = 1;
//         }
//
//         if (textObj[text[i]] !== undefined) {
//             textObj[text[i]] += 1;
//         } else {
//             textObj[text[i]] = 1;
//         }
//     }
//
//     if (haveSameFrequencies(patternObj, textObj)) {
//         result.push(0);
//     }
//
//     for (let i = pattern.length; i < text.length; i++) {
//         const outgoingIndex = i - pattern.length;
//         const outgoingElement = text[outgoingIndex];
//
//         textObj[outgoingElement] -= 1;
//
//         if (textObj[outgoingElement] === 0) {
//             delete textObj[outgoingElement];
//         }
//
//         if (textObj[text[i]] !== undefined) {
//             textObj[text[i]] += 1;
//         } else {
//             textObj[text[i]] = 1;
//         }
//
//         if (haveSameFrequencies(patternObj, textObj)) {
//             result.push(outgoingIndex + 1);
//         }
//     }
//     return result;
// }
//
// function haveSameFrequencies(obj1, obj2) {
//     for (const key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }


// function characterReplacement(s, k) {
//     let leftBorder = 0;
//     let objOfWindow = {};
//     let maxCountOfLetter = 0;
//     let longestLength = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         if (objOfWindow[s[i]] !== undefined) {
//             objOfWindow[s[i]] += 1;
//         } else {
//             objOfWindow[s[i]] = 1;
//         }
//
//         if (objOfWindow[s[i]] > maxCountOfLetter) {
//             maxCountOfLetter = objOfWindow[s[i]];
//         }
//
//         while (i - leftBorder + 1 - maxCountOfLetter > k) {
//             objOfWindow[s[leftBorder]]--;
//             leftBorder++;
//         }
//
//         let currentLength = i - leftBorder + 1;
//
//         if (currentLength > longestLength) {
//             longestLength = currentLength;
//         }
//     }
//     return longestLength;
// }


// function countSubarraysAtMostLimit(nums, limit) {
//     let leftBorder = 0;
//     let windowSum = 0;
//     let count = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         windowSum += nums[i];
//         while (windowSum > limit) {
//             windowSum -= nums[leftBorder];
//             leftBorder++
//         }
//         count += i - leftBorder + 1;
//     }
//     return count;
// }


function minWindow(s, t) {
    let tObj = {};
    let windowObj = {};
    let leftBorder = 0;
    let count = 0;

    let minWindowLength = Infinity;

    for (let i = 0; i < t.length; i++) {
        if (tObj[t[i]] !== undefined) {
            tObj[t[i]] += 1;
        } else {
            tObj[t[i]] = 1;
        }
    }

    let requiredTypes = Object.keys(tObj).length;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (windowObj[s[i]] !== undefined) {
            windowObj[s[i]] += 1;
        } else {
            windowObj[s[i]] = 1;
        }

        if (tObj[s[i]] !== undefined && windowObj[s[i]] === tObj[s[i]]) {
            count++;
        }

        while (count === requiredTypes) {
            let currentLength = i - leftBorder + 1;

            if (currentLength < minWindowLength) {
                minWindowLength = currentLength;
                startIndex = leftBorder;
            }

            let leftChar = s[leftBorder];
            windowObj[leftChar] -= 1;

            if (tObj[leftChar] !== undefined && windowObj[leftChar] < tObj[leftChar]) {
                count--;
            }

            leftBorder++;
        }
    }

    if (minWindowLength === Infinity) {
        return '';
    }

    return s.slice(startIndex, startIndex + minWindowLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));