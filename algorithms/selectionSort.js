async function selectionSort() {
  const bars = document.getElementsByClassName("bar");
  let n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Highlight the current position
    bars[i].style.background = "red";

    for (let j = i + 1; j < n; j++) {
      // Highlight the bar being compared
      bars[j].style.background = "yellow";
      await new Promise(resolve => setTimeout(resolve, 200));

      let value1 = parseInt(bars[minIndex].style.height);
      let value2 = parseInt(bars[j].style.height);

      if (value2 < value1) {
        // Reset old min color if not i
        if (minIndex !== i) {
          bars[minIndex].style.background = "steelblue";
        }
        minIndex = j;
      } else {
        bars[j].style.background = "steelblue";
      }
    }

    // Swap the found minimum with the first element
    let tempHeight = bars[i].style.height;
    bars[i].style.height = bars[minIndex].style.height;
    bars[minIndex].style.height = tempHeight;

    // Reset colors
    bars[minIndex].style.background = "steelblue";
    bars[i].style.background = "green"; // Mark as sorted
  }

  // Mark the last bar as sorted
  bars[n - 1].style.background = "green";
}
