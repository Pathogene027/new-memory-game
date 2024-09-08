const bottomRender = () => {
  // Create a new div element to display the timer
  const time = document.createElement("div");
  time.className = "time"; // Assign the class 'time' to the new div element

  // Function to start and manage the game timer
  const timeInterval = () => {
    interval = setInterval(() => {
      // Loop through each child of the playerEff element and remove the old timer display
      Array.from(playerEff.children).forEach((item) => {
        item.className === "time"
          ? playerEff.removeChild(document.querySelector(".time"))
          : null;
      });

      // HTML structure for displaying the timer (hours, minutes, seconds)
      const timeChild = `<p class="text">Timer</p><div class='elements'><p id='hr'>${doubler(
        hour
      )}:</p><p id='mn'>${doubler(minute)}:</p><p id='sc'>${doubler(
        second
      )}</p></div>`;

      // HTML structure for displaying the move count
      const moveCheck = `<div class='moves'><p class='text'>Moves</p><p class='elements'>${moves}</p></div>`;

      time.innerHTML = timeChild; // Update the timer div with the current time
      playerEff.innerHTML = moveCheck; // Update the playerEff element with the move count

      playerEff.insertAdjacentElement("afterbegin", time); // Insert the timer at the beginning of playerEff

      // Increment the seconds counter
      second += 1;
      // If seconds reach 60, increment the minutes counter and reset seconds
      second === 60 ? ((minute += 1), (second = 0)) : null;
      // If minutes reach 60, increment the hours counter and reset minutes
      minute === 60 ? ((hour += 1), (minute = 0)) : null;
    }, 1000); // Set the timer to update every second
  };

  // Check if the game is single-player mode
  if (playerKey === 1) {
    timeInterval(); // Start the timer for single-player mode
  } else {
    // HTML structure for displaying the current player in multiplayer mode
    const playerBox = `<div><p>Player</p><p>${turn}</p></div>`;
    playerEff.className = "player-effect-multi"; // Assign a class to style the multiplayer display

    // Repeat the playerBox structure for each player
    const players = playerBox.repeat(playerKey);
    playerEff.innerHTML = players; // Update the playerEff element with the player boxes

    // Loop through each player box and update the player number
    playerEff.childNodes.forEach((parent, index) => {
      parent.firstChild.innerHTML = `${parent.firstChild.innerHTML} ${
        index + 1
      }`;
    });

    colorFunction(); // Apply color styling based on player
  }
};
