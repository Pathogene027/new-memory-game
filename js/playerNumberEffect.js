const bottomRender = () => {
  const time = document.createElement("div");
  time.className = "time";
  const timeInterval = () => {
    interval = setInterval(() => {
      Array.from(playerEff.children).forEach((item) => {
        item.className === "time"
          ? playerEff.removeChild(document.querySelector(".time"))
          : null;
      });
      const timeChild = `<p class="text">Timer</p><div class='elements'><p id='hr'>${doubler(
        hour
      )}:</p><p id='mn'>${doubler(minute)}:</p><p id='sc'>${doubler(
        second
      )}</p></div>`;
      const moveCheck = `<div class='moves'><p class='text'>Moves</p><p class='elements'>${moves}</p></div>`;
      time.innerHTML = timeChild;
      playerEff.innerHTML = moveCheck;
      playerEff.insertAdjacentElement("afterbegin", time);
      second += 1;
      second === 60 ? ((minute += 1), (second = 0)) : null;
      minute === 60 ? ((hour += 1), (minute = 0)) : null;
    }, 1000);
  };
  if (playerKey === 1) {
    timeInterval();
  } else {
    const playerBox = `<div><p>Player</p><p>${turn}</p></div>`;
    playerEff.className = "player-effect-multi";
    const players = playerBox.repeat(playerKey);
    playerEff.innerHTML = players;
    playerEff.childNodes.forEach((parent, index) => {
      parent.firstChild.innerHTML = `${parent.firstChild.innerHTML} ${
        index + 1
      }`;
    });
    colorFunction();
  }
};
