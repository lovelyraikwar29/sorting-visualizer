async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  let n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Highlight bars being compared
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";

      await new Promise(resolve => setTimeout(resolve, 100)); // delay for visualization

      let value1 = parseInt(bars[j].style.height);
      let value2 = parseInt(bars[j + 1].style.height);

      if (value1 > value2) {
        // Swap heights
        bars[j].style.height = `${value2}px`;
        bars[j + 1].style.height = `${value1}px`;
      }

      // Reset color after comparison
      bars[j].style.background = "steelblue";
      bars[j + 1].style.background = "steelblue";
    }

    // Mark last sorted element
    bars[n - i - 1].style.background = "green";
  }

  // Mark first element as sorted at the end
  bars[0].style.background = "green";
}
