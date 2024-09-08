const countDown = () => {
  let count = 3;
  const children = balls.childNodes;
  children.forEach((child, index) => {
    displayHidden(child, index);
  });
  if (playerKey === 1) {
    const moveCheck = `<div class='moves'><p class='text'>Moves</p><p class='elements'>0</p></div>`;
    playerEff.innerHTML = moveCheck;

    const time = document.createElement("div");
    time.className = "time";
    time.innerHTML = `<p class="text">Timer</p><div class='elements'><p id='hr'>00:</p><p id='mn'>00:</p><p id='sc'>00</p></div>`;
    playerEff.insertAdjacentElement("afterbegin", time);
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
  }

  const countInterval = setInterval(() => {
    if (count === 0) {
      section.textContent = "Start";
      reverseClass(children);
      clearInterval(countInterval);
      bottomRender();
      memoryPosition();
    } else {
      section.textContent = count.toString(); // Display countdown number
    }
    section.className = "correct";
    rightSide.appendChild(section);
    count -= 1;
  }, 1000);
};
countDown();
