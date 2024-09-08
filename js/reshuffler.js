const mainShuffle = (type, grid) => {
  let initArr;
  let newArr;
  const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const themes = () => {
    if (grid === 8) {
      type === "n"
        ? (initArr = numberList.slice(0, 8))
        : (initArr = iconList.slice(0, 8));
    } else if (grid === 18) {
      type === "n" ? (initArr = numberList) : (initArr = iconList);
    }
    newArr = [...initArr, ...initArr];
  };

  themes();
  shuffle(newArr);
  return newArr;
};
