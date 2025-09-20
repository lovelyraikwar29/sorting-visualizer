async function insertionSort() {
  const bars = document.getElementsByClassName("bar");
  let n = bars.length;

  for (let i = 1; i < n; i++) {
    let key = parseInt(bars[i].style.height);
    let j = i - 1;

    // Highlight the current key bar
    bars[i].style.background = "red";
    await new Promise(resolve => setTimeout(resolve, 200));

    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      // Highlight compared bar
      bars[j].style.background = "yellow";

      await new Promise(resolve => setTimeout(resolve, 200));

      // Shift bar one step ahead
      bars[j + 1].style.height = bars[j].style.height;

      // Reset color
      bars[j].style.background = "steelblue";
      j--;
    }

    // Insert the key at the correct position
    bars[j + 1].style.height = `${key}px`;

    // Reset current bar color
    bars[i].style.background = "steelblue";
  }

  /
