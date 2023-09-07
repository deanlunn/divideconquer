function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If the middle element is 0 and the previous one is 1 or mid is 0
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
      return arr.length - mid;
    }

    // If middle element is 1, move to right half
    if (arr[mid] === 1) {
      start = mid + 1;
    } else {
      // Move to left half
      end = mid - 1;
    }
  }

  return 0; // If there are no zeroes
}

module.exports = countZeroes;
