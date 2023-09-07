function findFloor(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If the mid element is equal to x, then it's the floor
    if (arr[mid] === x) {
      return arr[mid];
    }

    // If the mid element is less than x, it's a potential floor
    if (arr[mid] < x) {
      floor = arr[mid];
      start = mid + 1;
    } else {
      // If the mid element is greater than x, move to the left side
      end = mid - 1;
    }
  }

  return floor;
}

module.exports = findFloor;
