// Vazifa
// 1-.
const arr1 = [55, 3, 2, 11, 3, 4, 6, 7, 12];
const sortedArr1 = [];
arr1.forEach(num => {
    let inserted = false;
    for (let i = 0; i < sortedArr1.length; i++) {
        if (num < sortedArr1[i]) {
            sortedArr1.splice(i, 0, num);
            inserted = true;
            break;
        }
    }
    if (!inserted) sortedArr1.push(num);
});
console.log("1:", sortedArr1);

// 2-.
const arr2 = [1, 6, 9, 5, 8, 10, 15];
const rangeSum = (arr, start, end) => {
    let sum = 0;
    arr.forEach((num, index) => {
        if (index >= start && index <= end) sum += num;
    });
    return sum;
};
console.log("2:", rangeSum(arr2, 2, 5));

// 3-.
const arr3 = [2, 4, 5, 6, 6, 3, 2, 1];
const uniqueArr3 = [];
arr3.forEach(num => {
    if (!uniqueArr3.includes(num)) uniqueArr3.push(num);
});
console.log("3:", uniqueArr3);

// 4-.
const arr4 = [55, 3, 2, 11, 3, 4, 6, 7, 12];
let maxVal = arr4[0];
let minVal = arr4[0];
arr4.forEach(num => {
    if (num > maxVal) maxVal = num;
    if (num < minVal) minVal = num;
});
console.log("4: Max =", maxVal, "Min =", minVal);

// 5-.
const arr5 = [1, 2, 3, 4, 5];
const reversedArr5 = [];
arr5.forEach((_, index) => {
    reversedArr5.unshift(arr5[index]);
});
console.log("5:", reversedArr5);

// 6-.
const arr6 = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
let oddCount = 0;
arr6.forEach(num => {
    if (num % 2 !== 0) {
        console.log("6: Odd number:", num);
        oddCount++;
    }
});
console.log("6: Odd count:", oddCount);

// 7-.
const arr7 = [2, 3, 4, 5, 7];
const oddIndexArr7 = [];
arr7.forEach((_, index) => {
    if (index % 2 !== 0) oddIndexArr7.push(arr7[index]);
});
console.log("7:", oddIndexArr7);

// 8-.
const arr8 = [5, 3, 9, 2, 7];
let maxOddIndex = Number.NEGATIVE_INFINITY;
arr8.forEach((num, index) => {
    if (index % 2 !== 0 && num > maxOddIndex) maxOddIndex = num;
});
console.log("8:", maxOddIndex);

// 9-.
const arr9 = [2, 1, 3, 8, 4];
const maxVal9 = Math.max(...arr9);
const minVal9 = Math.min(...arr9);
arr9.forEach((num, index) => {
    if (num > minVal9 && num < maxVal9) arr9[index] = 0;
});
console.log("9:", arr9);

// 10-.
const createArray = n => {
    const result = [];
    Array.from({ length: n }, (_, i) => result.push(i + 1));
    return result;
};
console.log("10:", createArray(5));

// 11-.
const arr11 = [22, 3, 5, 6, 3, 2, 3];
const reversedArr11 = [];
arr11.forEach(num => reversedArr11.unshift(num));
console.log("11:", reversedArr11);

// 12-.
const arr12 = [3, 5, 6, 3, 2, 3];
const uniqueArr12 = [];
arr12.forEach(num => {
    if (!uniqueArr12.includes(num)) uniqueArr12.push(num);
});
console.log("12:", uniqueArr12);

// 13-.
const arr13 = [5, 7, 2, 8, 3];
let minEvenIndex = Number.POSITIVE_INFINITY;
arr13.forEach((num, index) => {
    if (index % 2 === 0 && num < minEvenIndex) minEvenIndex = num;
});
console.log("13:", minEvenIndex);