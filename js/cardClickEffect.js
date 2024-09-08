let firstSelection = "";
const children = balls.childNodes;
let turnCounter = 0;
let counter = 0;
const divisor = 2;
let secStat = "";
const handleBallClick = (el, index) => {
  const parent = el.target;
  parent.setAttribute("name", `${clickables[index].id}`);
  const name = parent.getAttribute("name");
  if (!Array.from(parent.classList).includes("clicked")) {
    displayHidden(parent, index);
    const compared = document.querySelectorAll(`[name='${firstSelection}']`);
    const currentChild = innerChildren[turn].lastChild;
    const turnCounterInt = parseInt(currentChild.innerText);
    if (firstSelection) {
      if (firstSelection === name) {
        secStat = "correct";
        compared.forEach((item) => {
          item.classList.add("paired");
        });
        if (playerKey !== 1) {
          turnCounter = parseInt(turnCounterInt) + 1;
        }
        counter += 1;
      } else {
        const secondCompared = document.querySelectorAll(`[name='${name}']`);
        let keeper = [compared, secondCompared];
        secStat = "wrong";
        turnCounter = parseInt(turnCounterInt);
        setTimeout(() => {
          aggregateRun(keeper, "addclass");
        }, 500);
        timout = setTimeout(() => {
          aggregateRun(keeper, "");
        }, 1000);
      }
      sectionStatus(secStat);
      section.addEventListener("animationend", removeSection);
      resultPlaneTrigger(currentChild);
      if (turn === Array.from(playerEff.children).length) {
        turn = 0;
      }
      firstSelection = "";
      colorFunction();
    } else {
      firstSelection = name;
    }
  }
};
children.forEach((el, index) => {
  el.addEventListener("click", (event) => handleBallClick(event, index));
});
