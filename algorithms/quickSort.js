async function quickSort() {
  const bars = document.getElementsByClassName("bar");
  let array = Array.from(bars).map(bar => parseInt(bar.style.height));

  async function partition(arr, low, high) {
    let pivot = arr[high];
    bars[high].style.background = "orange"; // pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
      bars[j].style.background = "red"; // comparing
      await new Promise(resolve => setTimeout(resolve, 200));

      if (arr[j] < pivot) {
        i++;
        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        bars[i].style.height = `${arr[i]}px`;
        bars[j].style.height = `${arr[j]}px`;
      }

      bars[j].style.background = "steelblue";
    }

    // Swap pivot to correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    bars[i + 1].style.height = `${arr[i + 1]}px`;
    bars[high].style.height = `${arr[high]}px`;
    bars[high].style.background = "steelblue";

    return i + 1;
  }

  async function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = await partition(arr, low, high);
      bars[pi].style.background = "green"; // sorted pivot
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    } else if (low >= 0 && high >= 0 && low < bars.length && high < bars.length) {
      // Single element is sorted
      bars[low].style.background = "green";
    }
  }

  await quickSortHelper(array, 0, array.length - 1);

  // Mark all bars as sorted
  for (let bar of bars) {
    bar.style.background = "green";
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}
