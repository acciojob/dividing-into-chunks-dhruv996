function divide(arr, n) {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Add the last subarray
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
}

function divideArray() {
  const arrayInput = document.getElementById('arrayInput').value;
  const maxSum = parseInt(document.getElementById('maxSum').value);

  const array = arrayInput.split(',').map(Number);
  const result = divide(array, maxSum);

  document.getElementById('result').innerText = `Result: ${JSON.stringify(result)}`;
}

