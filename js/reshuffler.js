const mainShuffle = (type, grid) => {
  let initArr; // Initial array that will hold either numbers or icons based on the type
  let newArr; // New array that will be a doubled version of initArr and then shuffled

  // Function to shuffle an array using Fisher-Yates shuffle algorithm
  const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at indices i and j
    }
    return arr; // Return the shuffled array
  };

  // Function to initialize the array based on the game grid size and type
  const themes = () => {
    if (grid === 8) {
      // If grid size is 8, select the first 8 elements from numberList or iconList
      type === "n"
        ? (initArr = numberList.slice(0, 8))
        : (initArr = iconList.slice(0, 8));
    } else if (grid === 18) {
      // If grid size is 18, use the entire numberList or iconList
      type === "n" ? (initArr = numberList) : (initArr = iconList);
    }
    // Create a new array by duplicating the initArr
    newArr = [...initArr, ...initArr];
  };

  themes(); // Initialize the array based on the grid and type
  shuffle(newArr); // Shuffle the new array
  return newArr; // Return the shuffled array
};
