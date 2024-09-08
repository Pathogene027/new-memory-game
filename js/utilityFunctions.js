// Function to display hidden content within a parent element
const displayHidden = (parent, index) => {
  // Create an <i> element with a class based on clickables array and content based on the themeKey
  const hiddenEle = `<i class="${clickables[index].name}">${
    themeKey !== "i" ? clickables[index].name : ""
  }</i>`;

  // Add the created element to the parent and set its class to "clicked"
  parent.innerHTML += hiddenEle;
  parent.className = "clicked";
};

// Function to add "unpaired" class to each item in the provided array
const addClass = (value) => {
  value.forEach((item) => {
    item.classList.add("unpaired");
  });
};

// Function to reset classes and attributes for each item in the provided array
const reverseClass = (value) => {
  value.forEach((item) => {
    item.className = "ball_element"; // Reset the class name
    item.setAttribute("name", ""); // Clear the "name" attribute

    // Remove child elements except the first one
    item.childNodes.forEach((i, index) => {
      index === 1 ? item.removeChild(i) : null;
    });
  });
};

// Function to trigger the result display after game actions
const resultPlaneTrigger = (currentChild) => {
  // Create a new Display instance
  const resultPlane = new Display();

  // Define a method to display results based on the number of players
  const method = () => {
    playerKey === 1
      ? resultPlane.setSinglePlayer()
      : resultPlane.setMultiPlayer();
  };

  // Check if the game has ended by comparing the counter with half the number of children
  const decision = counter === children.length / divisor ? method() : null;

  if (playerKey === 1) {
    moves += 1; // Increment moves counter for single player
    document.querySelector(".moves").lastChild.innerText = moves; // Update the UI
    decision; // Call the decision method if the game has ended
  } else {
    currentChild.innerText = turnCounter; // Update the turn counter for multiplayer
    turn += 1; // Increment the turn
    decision; // Call the decision method if the game has ended
  }
};

// Function to update the color of UI elements based on the current turn in multiplayer mode
const colorFunction = () => {
  playerKey !== 1
    ? Array.from(innerChildren).forEach((item, index) => {
        Array.from(item.classList).includes("turn")
          ? item.classList.remove("turn") // Remove "turn" class from the previous player
          : index === turn
          ? item.classList.add("turn") // Add "turn" class to the current player
          : null;
      })
    : null;
};

// Function to return a random item from a provided list
const randomCompliment = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

// Function to remove the last section from the right side if more than one child exists
const removeSection = () => {
  rightSide.children.length > 1
    ? rightSide.removeChild(rightSide.lastChild)
    : null;
};

// Function to add a new section to the right side with random content
const addSection = (compType) => {
  section.textContent = randomCompliment(compType);
  rightSide.appendChild(section);
};

// Function to update the status section with appropriate content based on correctness
const sectionStatus = (wrong) => {
  if (wrong === "wrong") {
    section.className = "wrong";
    addSection(fail); // Add a section indicating failure
  } else {
    section.className = "correct";
    addSection(pass); // Add a section indicating success
  }
};

// Function to handle color changes on click events
const colorChange = (event) => {
  const element = event.target;
  const parent = element.parentNode;
  const children = parent.children;

  // Remove "clicked" class from all children
  for (const child of children) {
    try {
      child.className.includes("clicked")
        ? child.classList.remove("clicked")
        : null;
    } catch (err) {
      console.log(err);
    }
  }
  // Add "clicked" class to the clicked element
  element.classList.add("clicked");
};

// Function to handle theme selection on click
const handleThemeClick = (event) => {
  themeData = event.target.getAttribute("content");
  colorChange(event); // Update UI colors
  submitColor(); // Handle the submit button activation
};

// Function to handle player number selection on click
const handlePlayerNumberClick = (event) => {
  playerNumber = parseInt(event.target.getAttribute("content"));
  colorChange(event); // Update UI colors
  submitColor(); // Handle the submit button activation
};

// Function to handle grid size selection on click
const handleGridSize = (event) => {
  gridSize = parseInt(event.target.getAttribute("content"));
  colorChange(event); // Update UI colors
  submitColor(); // Handle the submit button activation
};

// Function to activate the submit button when all selections are made
const submitColor = () => {
  const data = {
    themeKey: themeData,
    playerKey: playerNumber,
    gridKey: gridSize,
  };

  // Activate submit button if all data is available
  if (!Object.values(data).includes(undefined)) {
    strtBn.classList.add("strtBn-true");
    strtBn.addEventListener("mouseenter", () => handleSumbitEnter());
    strtBn.addEventListener("mouseleave", () => handleSubmitLeave());
  }
};

// Function to handle submit button click
const handleSubmit = () => {
  localStorage.clear();
  const data = {
    themeKey: themeData,
    playerKey: playerNumber,
    gridKey: gridSize,
  };

  // Store data in local storage and navigate to the game page
  if (!Object.values(data).includes(undefined)) {
    localStorage.setItem("localData", JSON.stringify(data));
    location.href = "gamepage.html";
  }
};

// Function to change the submit button's background color on mouse enter
const handleSumbitEnter = () => {
  strtBn.style.backgroundColor = "#ffb84a";
};

// Function to reset the submit button's background color on mouse leave
const handleSubmitLeave = () => {
  strtBn.style.backgroundColor = "orange";
};

// Function to apply a class-based action on each item in an array
const aggregateRun = (array, condition) => {
  array.forEach((item) => {
    condition === "addclass" ? addClass(item) : reverseClass(item);
  });
};

// Function to handle expanding or collapsing elements based on their ID
const handleExpandClick = (event) => {
  const eventId = event.target.id;
  document.querySelector(`.${eventId}`).classList.toggle("display"); // Toggle display class

  // Toggle arrow direction in the clicked element
  event.target.childNodes.forEach((item) => {
    try {
      item.className.includes("down-arrow")
        ? item.classList.replace("down-arrow", "up-arrow")
        : item.classList.replace("up-arrow", "down-arrow");
    } catch (err) {
      console.log(err);
    }
  });
};

// Function to remove specific classes from child elements of a clicked element
const childClassRemove = (event) => {
  const element = event.target;
  try {
    Array.from(element.parentNode.children).forEach((child) =>
      classLists.forEach((item) => child.firstChild.classList.remove(item))
    );
  } catch (err) {
    console.log(err);
  }
  element.firstChild.classList.add("clickedSvg");
};

// Function to animate an element on click and perform an action based on the state
const classAnimation = (event, state) => {
  element = event.target;
  element.className = "el-clicked";
  element.addEventListener("animationend", () => {
    state === "home"
      ? (window.location.href = "../html/start.html")
      : window.location.reload(); // Reload page or go to home depending on the state
  });
};

// Function to handle page reload with animation
const reload = (event) => {
  classAnimation(event, "reload");
};

// Extended function to handle reload with child class removal
const reloadExt = (event) => {
  childClassRemove(event);
  reload(event);
};

// Function to navigate to home page with animation
const home = (event) => {
  classAnimation(event, "home");
};

// Extended function to handle navigation to home with child class removal
const homeExt = (event) => {
  childClassRemove(event);
  home(event);
};

// Utility function to add a leading zero to single-digit numbers
const doubler = (value) => {
  return value.toString().length < 2 ? "0" + value : value;
};

// Function to extract and structure data from HTML elements
const scrapeData = (data) => {
  let newObj = {};
  Array.from(data).forEach((item) => {
    newObj[item.firstChild.innerText] = item.lastChild.innerText;
  });
  return newObj;
};

// Function to sort an object in descending order by its values
const descending = (arr) => {
  let list = Object.fromEntries(
    Object.entries(arr).sort((a, b) => b[1] - a[1])
  );
  return list;
};

// Function to handle mouse enter events and display a tooltip if necessary
const handleMouseEnter = (event) => {
  const element = event.target;
  if (element.children.length > 1) {
    element.lastChild.className = "paragraph";
  }
  element.firstChild.classList.toggle("hoveredSvg");
};

// Function to handle mouse leave events and hide a tooltip if necessary
const handleMouseLeave = (event) => {
  const element = event.target;
  if (element.children.length > 1) {
    element.lastChild.className = "";
  }
  element.firstChild.classList.toggle("hoveredSvg");
};
