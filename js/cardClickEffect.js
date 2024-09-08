let firstSelection = ""; // Variable to store the first clicked ball's name for comparison
const children = balls.childNodes; // Get all the child nodes of the 'balls' element (these are the clickable balls)
let turnCounter = 0; // Counter to track the number of turns
let counter = 0; // Counter to track the number of matched pairs
const divisor = 2; // Constant to divide values if necessary (used in game logic)
let secStat = ""; // Variable to store the status of the second click ("correct" or "wrong")

// Function to handle click events on each ball
const handleBallClick = (el, index) => {
  const parent = el.target; // Get the clicked element
  parent.setAttribute("name", `${clickables[index].id}`); // Set the 'name' attribute of the clicked element to its ID
  const name = parent.getAttribute("name"); // Get the 'name' attribute of the clicked element

  // Check if the clicked ball hasn't already been clicked before (to avoid re-clicking the same ball)
  if (!Array.from(parent.classList).includes("clicked")) {
    displayHidden(parent, index); // Display the hidden content of the clicked ball

    const compared = document.querySelectorAll(`[name='${firstSelection}']`); // Get all balls with the same name as the first selection
    const currentChild = innerChildren[turn].lastChild; // Get the last child of the current player's section (for turn tracking)
    const turnCounterInt = parseInt(currentChild.innerText); // Convert the turn counter's text to an integer

    if (firstSelection) {
      // If this is the second ball being clicked (i.e., a pair attempt)
      if (firstSelection === name) {
        // Check if the second selection matches the first
        secStat = "correct"; // Set the status to "correct"
        compared.forEach((item) => {
          item.classList.add("paired"); // Mark all matched balls as paired
        });

        if (playerKey !== 1) {
          // If not the first player
          turnCounter = parseInt(turnCounterInt) + 1; // Increment the turn counter
        }

        counter += 1; // Increment the match counter
      } else {
        // If the second selection does not match the first
        const secondCompared = document.querySelectorAll(`[name='${name}']`); // Get the second set of balls with the mismatched name
        let keeper = [compared, secondCompared]; // Store both the first and second selections
        secStat = "wrong"; // Set the status to "wrong"
        turnCounter = parseInt(turnCounterInt); // Maintain the current turn counter

        // Temporarily add a class to indicate the wrong choice and then revert after a timeout
        setTimeout(() => {
          aggregateRun(keeper, "addclass");
        }, 500);

        timout = setTimeout(() => {
          aggregateRun(keeper, "");
        }, 1000);
      }

      sectionStatus(secStat); // Update the game section's status (correct or wrong)
      section.addEventListener("animationend", removeSection); // Listen for the end of the animation to remove a section
      resultPlaneTrigger(currentChild); // Trigger the result plane (to show results of the turn)

      if (turn === Array.from(playerEff.children).length) {
        // If all players have taken their turn
        turn = 0; // Reset the turn to the first player
      }

      firstSelection = ""; // Reset the first selection for the next turn
      colorFunction(); // Update the UI colors based on the game state
    } else {
      firstSelection = name; // If it's the first ball clicked, store its name for comparison
    }
  }
};

// Add click event listeners to all the balls
children.forEach((el, index) => {
  el.addEventListener("click", (event) => handleBallClick(event, index));
});
