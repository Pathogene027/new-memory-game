const memoryPosition = () => {
  const mobilePortraitQuery = window.matchMedia(
    "(max-width: 767px) and (min-width: 300px) and (orientation: portrait)"
  );
  const tabletPortraitQuery = window.matchMedia(
    "(max-width: 1024px) and (min-width:768px) and (orientation:portrait)"
  );
  const mobileLandscapeQuery = window.matchMedia(
    "(max-width: 1023px)and (orientation: landscape)"
  );

  const option = Array.from(document.querySelectorAll(".option"));
  const optionDisplay = (text) => {
    option.forEach((child) => (child.style.display = text));
  };

  if (
    mobilePortraitQuery.matches ||
    tabletPortraitQuery.matches ||
    mobileLandscapeQuery.matches
  ) {
    mobilePortraitQuery.matches
      ? optionDisplay("none")
      : optionDisplay("inline");
    try {
      const divs = Array.from(
        document.querySelector(".player-effect-multi").children
      );
      divs.forEach((div) => {
        let firstChildText = div.firstChild.innerText;
        div.firstChild.innerText =
          firstChildText.slice(0, 1) +
          firstChildText.slice(firstChildText.length - 1);
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    optionDisplay("inline");
    try {
      const divs = Array.from(
        document.querySelector(".player-effect-multi").children
      );
      divs.forEach((div) => {
        const firstChildText = div.firstChild.innerText;
        firstChildText < 3
          ? (div.firstChild.innerText = `${firstChildText[0]}layer ${firstChildText[1]}`)
          : null;
      });
    } catch (err) {
      console.log(err);
    }
  }

  window.addEventListener("resize", memoryPosition);
};

memoryPosition();
