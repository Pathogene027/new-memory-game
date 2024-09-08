class Display {
  constructor() {
    this.parent = document.body;
    this.upperText =
      '<div id="upperText"><h2 id="bigText"></h2><h6 id="smallText"></h6></div>';
    this.restartButton = "<li onclick='reload(event)'><h5 >Restart</h5></li>";
    this.homeButton = "<li onclick='home(event)'><h5 >Setup New Game</h5></li>";
    this.lowerText = `<ul id="lowerText">${this.restartButton}${this.homeButton}</ul>`;
    this.finalResultContainer = document.createElement("div");
    this.finalResultContainer.id = "finalResult";
    this.finalResultContainer.innerHTML = `<div id='fr-wrapper'>${this.upperText}${this.lowerText}</div>`;
    this.wrap = this.finalResultContainer.firstChild.firstChild;
  }
  setSinglePlayer() {
    this.parent.prepend(this.finalResultContainer);
    document.getElementById("bigText").innerText = "You did it!";
    document.getElementById("smallText").innerText =
      "Game over! Here's how you got on...";
    const dataTags = `<ul id='data'><li><h5>Time Elapses</h5><h3>${doubler(
      hour
    )}:${doubler(minute)}:${doubler(second)}</h3></li><li>
    <h5>Moves Taken</h5><h3>${moves + 1} moves</h3></li></ul>`;
    this.wrap.insertAdjacentHTML("afterend", dataTags);
    clearInterval(interval);
  }
  setMultiPlayer() {
    this.parent.prepend(this.finalResultContainer);
    const positions = Object.entries(
      descending(scrapeData(playerEff.children))
    );
    positions[0][1] === positions[1][1]
      ? (singleWin = false)
      : (singleWin = true);
    let largestVal = "";
    positions.map((item, index) => {
      const value = item[1];
      const name = item[0];
      if (index === 0) {
        largestVal = value;
      }
      const listItems = `<li><h5>${
        value === largestVal ? name + " (Winner)" : name
      } </h5><h3>${value} point(s)</h3></li>`;
      this.wrap.insertAdjacentHTML("beforeend", listItems);
    });
    document.getElementById("bigText").innerText = singleWin
      ? "We have a winner!"
      : "We have a tie";
    document.getElementById("smallText").innerText =
      "Game over! Here are the results...";
  }
}
