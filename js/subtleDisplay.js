const countDown = () => {
  // Initialize countdown starting value
  let count = 3;

  // Get all child nodes of the 'balls' element
  const children = balls.childNodes;

  // Hide all child nodes initially
  children.forEach((child, index) => {
    displayHidden(child, index);
  });

  // Check if the game is single-player or multiplayer
  if (playerKey === 1) {
    // Single-player setup: Create and display a moves counter and a timer
    const moveCheck = `<div class='moves'><p class='text'>Moves</p><p class='elements'>0</p></div>`;
    playerEff.innerHTML = moveCheck;

    const time = document.createElement("div");
    time.className = "time";
    time.innerHTML = `<p class="text">Timer</p><div class='elements'><p id='hr'>00:</p><p id='mn'>00:</p><p id='sc'>00</p></div>`;
    playerEff.insertAdjacentElement("afterbegin", time);
  } else {
    // Multiplayer setup: Create and display a player box for each player
    const playerBox = `<div><p>Player</p><p>${turn}</p></div>`;
    playerEff.className = "player-effect-multi";
    const players = playerBox.repeat(playerKey);
    playerEff.innerHTML = players;

    // Append player numbers to each player box
    playerEff.childNodes.forEach((parent, index) => {
      parent.firstChild.innerHTML = `${parent.firstChild.innerHTML} ${
        index + 1
      }`;
    });
  }

  // Countdown timer function to start the game after countdown
  const countInterval = setInterval(() => {
    if (count === 0) {
      // When countdown reaches 0, display "Start" and trigger game start functions
      section.textContent = "Start";
      reverseClass(children); // Reveal all hidden elements
      clearInterval(countInterval); // Stop the countdown interval
      bottomRender(); // Render the bottom UI (timer, moves, etc.)
      memoryPosition(); // Adjust positions based on screen size
    } else {
      // Display the current countdown number
      section.textContent = count.toString();
    }
    section.className = "correct"; // Set the class for countdown animation
    rightSide.appendChild(section); // Append the countdown to the right side of the screen
    count -= 1; // Decrement the countdown
  }, 1000); // Countdown interval of 1 second
};

// Initiate the countdown
countDown();
