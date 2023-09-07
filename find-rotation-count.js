function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  // If the array is already sorted and there's no rotation
  if (arr[start] < arr[end]) return 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Check if the mid element is the pivot
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // If the left side is sorted, then the pivot is on the right side
    if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      // If the left side isn't sorted, the pivot is on the left side
      end = mid - 1;
    }
  }

  return 0;
}

module.exports = findRotationCount;
