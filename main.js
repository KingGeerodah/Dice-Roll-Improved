// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Define die1 and die2 at the top-level scope
let die1, die2;

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1}, ${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  // Roll 2 dice five times
  for (let i = 0; i < 5; i++) {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1}, ${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Prompt the user for the number of times to roll the dice
  let rolls = prompt("Enter the number of times to roll the dice:");
  if (rolls === null || isNaN(rolls) || rolls < 1) {
    alert("Please enter a valid number of rolls.");
    return;
  }

  // Display Menu Title
  outputEl.innerHTML = `<h3>ROLL ${rolls} TIMES</h3>`;

  // Roll 2 dice the user-specified number of times
  for (let i = 0; i < rolls; i++) {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1}, ${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let rolls = 0;
  do {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    rolls++;
  } while (die1 !== 1 || die2 !== 1);

  // Display the number of rolls it took to get snake eyes
  let pEl = document.createElement("p");
  pEl.innerHTML = `It took ${rolls} rolls to get snake eyes (1, 1).`;
  outputEl.appendChild(pEl);
}
