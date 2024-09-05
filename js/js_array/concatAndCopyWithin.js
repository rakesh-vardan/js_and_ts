// concat()

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // result: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

/*
Mehod:  
copyWithin()

Syntax: 
copyWithin(target, start)
copyWithin(target, start, end)


*/

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);  // Paste elements starting at index 0, copied from index 3 to the end
console.log(arr); // Output: [4, 5, 3, 4, 5]
/*
target = 0: Pasting starts at index 0.
start = 3: Copying starts from index 3 (4).
No end provided: Copy from start (3) to the end of the array.
The first two elements (1, 2) are replaced by 4, 5 starting at index 0.
*/

let arr2 = [1, 2, 3, 4, 5,6,7,8,9];
arr2.copyWithin(2, 3, 6);  // Paste elements starting at index 2, copied from index 3 to just before index 6(basically up to 5)
console.log(arr2); // Output: [1,2,4,5,6,6,7,8,9]

//When end is beyond the length of the array

let arr3 = [10, 20, 30, 40, 50];
arr3.copyWithin(0, 2, 10);  // Copy from index 2 to the end since `end` exceeds array length
console.log(arr3); // Output: [30, 40, 50, 40, 50]

// When end is less than start

let arr4 = [1, 2, 3, 4, 5];
arr4.copyWithin(2, 3, 2);  // `end` is less than `start`, so nothing is copied
console.log(arr4); // Output: [1, 2, 3, 4, 5]

//Negative Index Example

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*+ve idx= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
-ve Inde=[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]*/

arr5.copyWithin(-2, -4, -7);  // Paste elements starting at index -2 (8 ->9), copied from index -4(6 ->7) to -7(3->4=>null)
console.log(arr5); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*Since the end index is before the start index, no elements are copied, and thus the array remains unchanged.
Breakdown:
target = -2: Start pasting at index -2, which is index 8 (element 9 in positive index).
start = -4: Start copying from index -4, which is index 6 (element 7 in positive index).
end = -7: End copying at index -7, which is index 3 (element 4 in positive index).
However, the end index (-7->3) is before the start index (-4->6), resulting in an invalid range.
*/

arr5.copyWithin(-3, -7, -4);  // Paste elements starting at index -3 (7 ->8), copied from index -7(3->4) to -4(6->7=>4,5,6)
console.log(arr5); // Output: [1, 2, 3, 4, 5, 6, 7, 4, 5, 6]

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr6.copyWithin(-2, -7, -4);  // Paste elements starting at index -2 (7 ->8), copied from index -7(3->4) to -4(6->7=>4,5,6)
console.log(arr6); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 4, 5]