const memoryPosition = () => {
  // Define media queries for different screen sizes and orientations
  const mobilePortraitQuery = window.matchMedia(
    "(max-width: 767px) and (min-width: 300px) and (orientation: portrait)"
  );
  const tabletPortraitQuery = window.matchMedia(
    "(max-width: 1024px) and (min-width:768px) and (orientation:portrait)"
  );
  const mobileLandscapeQuery = window.matchMedia(
    "(max-width: 1023px) and (orientation: landscape)"
  );

  // Select all elements with the class 'option' and convert NodeList to an array
  const option = Array.from(document.querySelectorAll(".option"));

  // Function to display or hide 'option' elements based on the provided text (e.g., "none" or "inline")
  const optionDisplay = (text) => {
    option.forEach((child) => (child.style.display = text));
  };

  // Check if any of the media queries match the current screen size and orientation
  if (
    mobilePortraitQuery.matches ||
    tabletPortraitQuery.matches ||
    mobileLandscapeQuery.matches
  ) {
    // If the mobile portrait query matches, hide the options; otherwise, show them inline
    mobilePortraitQuery.matches
      ? optionDisplay("none")
      : optionDisplay("inline");

    try {
      // If the class 'player-effect-multi' exists, modify the inner text of its child elements
      const divs = Array.from(
        document.querySelector(".player-effect-multi").children
      );
      divs.forEach((div) => {
        // Shorten the inner text of the first child by keeping only the first and last characters
        let firstChildText = div.firstChild.innerText;
        div.firstChild.innerText =
          firstChildText.slice(0, 1) +
          firstChildText.slice(firstChildText.length - 1);
      });
    } catch (err) {
      console.log(err); // Log any errors that occur
    }
  } else {
    // If no media queries match, show the options inline
    optionDisplay("inline");

    try {
      // Modify the inner text of 'player-effect-multi' child elements for desktop view
      const divs = Array.from(
        document.querySelector(".player-effect-multi").children
      );
      divs.forEach((div) => {
        const firstChildText = div.firstChild.innerText;
        // If the first character is less than 3, prefix it with 'layer'
        firstChildText < 3
          ? (div.firstChild.innerText = `${firstChildText[0]}layer ${firstChildText[1]}`)
          : null;
      });
    } catch (err) {
      console.log(err); // Log any errors that occur
    }
  }

  // Add an event listener to re-run memoryPosition when the window is resized
  window.addEventListener("resize", memoryPosition);
};

// Initial call to memoryPosition to apply the correct layout based on the current screen size
memoryPosition();
