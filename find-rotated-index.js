function findRotatedIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  // Helper function to perform standard binary search
  function binarySearch(start, end) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === num) return mid;
      else if (arr[mid] < num) start = mid + 1;
      else end = mid - 1;
    }

    return -1;
  }

  // Find the rotation pivot (smallest element's index)
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      start = mid + 1;
      break;
    } else if (mid > start && arr[mid] < arr[mid - 1]) {
      start = mid;
      break;
    } else if (arr[start] <= arr[mid]) {
      // Left half is sorted
      start = mid + 1;
    } else {
      // Right half is sorted
      end = mid - 1;
    }
  }

  // If the array isn't rotated at all
  if (start > end) return binarySearch(0, arr.length - 1);

  // Decide which half of the array to perform binary search on
  if (num >= arr[0] && num <= arr[start - 1]) {
    return binarySearch(0, start - 1);
  } else {
    return binarySearch(start, arr.length - 1);
  }
}

module.exports = findRotatedIndex;
