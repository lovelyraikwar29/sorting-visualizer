async function mergeSort() {
  const bars = document.getElementsByClassName("bar");
  let array = Array.from(bars).map(bar => parseInt(bar.style.height));

  async function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      // Highlight bars being compared
      bars[k].style.background = "red";
      await new Promise(resolve => setTimeout(resolve, 200));

      if (left[i] <= right[j]) {
        arr[k] = left[i];
        bars[k].style.height = `${left[i]}px`;
        i++;
      } else {
        arr[k] = right[j];
        bars[k].style.height = `${right[j]}px`;
        j++;
      }
      bars[k].style.background = "steelblue";
      k++;
    }

    while (i < left.length) {
      bars[k].style.background = "red";
      await new Promise(resolve => setTimeout(resolve, 200));
      arr[k] = left[i];
      bars[k].style.height = `${left[i]}px`;
      bars[k].style.background = "steelblue";
      i++; k++;
    }

    while (j < right.length) {
      bars[k].style.background = "red";
      await new Promise(resolve => setTimeout(resolve, 200));
      arr[k] = right[j];
      bars[k].style.height = `${right[j]}px`;
      bars[k].style.background = "steelblue";
      j++; k++;
    }
  }

  async function mergeSortHelper(arr, start, end) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    await mergeSortHelper(arr, start, mid);
    await mergeSortHelper(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }

  await mergeSortHelper(array, 0, array.length - 1);

  // Mark all bars as sorted
  for (let bar of bars) {
    bar.style.background = "green";
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}

