class Display {
  constructor() {
    this.parent = document.body; // The parent element where the final result container will be added
    // HTML template for the upper text section (displaying the result summary)
    this.upperText =
      '<div id="upperText"><h2 id="bigText"></h2><h6 id="smallText"></h6></div>';
    // HTML for the "Restart" button, which triggers a game reload
    this.restartButton = "<li onclick='reload(event)'><h5>Restart</h5></li>";
    // HTML for the "Home" button, which takes the player back to the game setup
    this.homeButton = "<li onclick='home(event)'><h5>Setup New Game</h5></li>";
    // Combining the restart and home buttons into a lower text section
    this.lowerText = `<ul id="lowerText">${this.restartButton}${this.homeButton}</ul>`;
    // Creating a container for the final result display
    this.finalResultContainer = document.createElement("div");
    this.finalResultContainer.id = "finalResult"; // Assigning an ID for styling and manipulation
    // Setting the inner HTML of the final result container
    this.finalResultContainer.innerHTML = `<div id='fr-wrapper'>${this.upperText}${this.lowerText}</div>`;
    // Getting a reference to the wrapper element for later use
    this.wrap = this.finalResultContainer.firstChild.firstChild;
  }

  // Method to display the final results for a single-player game
  setSinglePlayer() {
    this.parent.prepend(this.finalResultContainer); // Add the result container to the beginning of the body
    document.getElementById("bigText").innerText = "You did it!"; // Set the main result text
    document.getElementById("smallText").innerText =
      "Game over! Here's how you got on..."; // Set the subtext to display a summary message

    // Create HTML to display the time elapsed and moves taken
    const dataTags = `<ul id='data'><li><h5>Time Elapsed</h5><h3>${doubler(
      hour
    )}:${doubler(minute)}:${doubler(second)}</h3></li><li>
    <h5>Moves Taken</h5><h3>${moves + 1} moves</h3></li></ul>`;

    // Insert the time and moves data after the wrap element
    this.wrap.insertAdjacentHTML("afterend", dataTags);
    clearInterval(interval); // Stop the game timer
  }

  // Method to display the final results for a multiplayer game
  setMultiPlayer() {
    this.parent.prepend(this.finalResultContainer); // Add the result container to the beginning of the body

    // Get the player scores, sorted in descending order
    const positions = Object.entries(
      descending(scrapeData(playerEff.children))
    );

    // Check if there's a tie between the top two players
    positions[0][1] === positions[1][1]
      ? (singleWin = false) // If there's a tie, set singleWin to false
      : (singleWin = true); // Otherwise, there's a single winner

    let largestVal = ""; // Variable to store the highest score

    // Loop through the sorted player positions and generate HTML for each player's result
    positions.map((item, index) => {
      const value = item[1]; // Get the player's score
      const name = item[0]; // Get the player's name
      if (index === 0) {
        largestVal = value; // Store the highest score from the first iteration
      }
      // Create HTML list items for each player, marking the winner
      const listItems = `<li><h5>${
        value === largestVal ? name + " (Winner)" : name
      } </h5><h3>${value} point(s)</h3></li>`;
      // Insert the player's result into the wrap element
      this.wrap.insertAdjacentHTML("beforeend", listItems);
    });

    // Set the main result text based on whether there's a winner or a tie
    document.getElementById("bigText").innerText = singleWin
      ? "We have a winner!"
      : "We have a tie";

    // Set the subtext to display a summary message
    document.getElementById("smallText").innerText =
      "Game over! Here are the results...";
  }
}
