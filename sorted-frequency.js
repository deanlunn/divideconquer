function sortedFrequency(arr, num) {
  // Helper function to find the first occurrence using binary search
  function findFirst() {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === num && (mid === 0 || arr[mid - 1] !== num)) {
        return mid;
      } else if (arr[mid] < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }

  // Helper function to find the last occurrence using binary search
  function findLast() {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (
        arr[mid] === num &&
        (mid === arr.length - 1 || arr[mid + 1] !== num)
      ) {
        return mid;
      } else if (arr[mid] <= num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }

  const first = findFirst();
  const last = findLast();

  if (first === -1 || last === -1) return -1;

  return last - first + 1;
}

module.exports = sortedFrequency;
