const clickables = mainShuffle(themeKey, gridKey);
const balls = document.querySelector("#balls");

for (item in clickables) {
  const newTag = document.createElement("div");
  const guess = "<i >?</i>";
  newTag.className = `ball_element`;
  newTag.innerHTML = `${guess}`;
  balls.appendChild(newTag);
}
if (gridKey === 8) {
  balls.className = "balls-8";
} else if (gridKey === 18) {
  balls.className = "balls-18";
}
