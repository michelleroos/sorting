const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  left.reverse(); // make them decreasing order
  right.reverse();
  const merged = [];
  while (left.length && right.length) {
    if (left[left.length - 1] < right[right.length - 1]) {
      merged.push(left.pop()); // O(1)
    } else {
      merged.push(right.pop());
    };
  };
  // push leftover elements onto merged
  merged.push(...left.reverse()); // make sure to re-reverse leftovers
  merged.push(...right.reverse());
  return merged;
};

// True O(n logn) in JS
// O(n) space