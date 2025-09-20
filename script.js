let array = [];
const container = document.getElementById("bars-container");

// Generate a random array
function generateArray(size = 30) {
  array = [];
  container.innerHTML = ""; // Clear previous bars

  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * 300) + 10; // random height
    array.push(value);

    // Create the bar
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;

    container.appendChild(bar);
  }
}

// Run once at start
generateArray();
