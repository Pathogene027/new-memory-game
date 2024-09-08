const displayHidden = (parent, index) => {
  const hiddenEle = `<i class="${clickables[index].name}">${
    themeKey !== "i" ? clickables[index].name : ""
  }</i>`;
  parent.innerHTML += hiddenEle;
  parent.className = "clicked";
};
const addClass = (value) => {
  value.forEach((item) => {
    item.classList.add("unpaired");
  });
};
const reverseClass = (value) => {
  value.forEach((item) => {
    item.className = "ball_element";
    item.setAttribute("name", "");
    item.childNodes.forEach((i, index) => {
      index === 1 ? item.removeChild(i) : null;
    });
  });
};
const resultPlaneTrigger = (currentChild) => {
  const resultPlane = new Display();
  const method = () => {
    playerKey === 1
      ? resultPlane.setSinglePlayer()
      : resultPlane.setMultiPlayer();
  };
  const decision = counter === children.length / divisor ? method() : null;

  if (playerKey === 1) {
    moves += 1;
    document.querySelector(".moves").lastChild.innerText = moves;
    decision;
  } else {
    currentChild.innerText = turnCounter;
    turn += 1;
    decision;
  }
};
const colorFunction = () => {
  playerKey !== 1
    ? Array.from(innerChildren).forEach((item, index) => {
        Array.from(item.classList).includes("turn")
          ? item.classList.remove("turn")
          : index === turn
          ? item.classList.add("turn")
          : null;
      })
    : null;
};
const randomCompliment = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
const removeSection = () => {
  rightSide.children.length > 1
    ? rightSide.removeChild(rightSide.lastChild)
    : null;
};
const addSection = (compType) => {
  section.textContent = randomCompliment(compType);
  rightSide.appendChild(section);
};
const sectionStatus = (wrong) => {
  if (wrong === "wrong") {
    section.className = "wrong";
    addSection(fail);
  } else {
    section.className = "correct";
    addSection(pass);
  }
};
const colorChange = (event) => {
  const element = event.target;
  const parent = element.parentNode;
  const children = parent.children;
  for (const child of children) {
    try {
      child.className.includes("clicked")
        ? child.classList.remove("clicked")
        : null;
    } catch (err) {
      console.log(err);
    }
  }
  element.classList.add("clicked");
};
const handleThemeClick = (event) => {
  themeData = event.target.getAttribute("content");
  colorChange(event);
  submitColor();
};
const handlePlayerNumberClick = (event) => {
  playerNumber = parseInt(event.target.getAttribute("content"));
  colorChange(event);
  submitColor();
};
const handleGridSize = (event) => {
  gridSize = parseInt(event.target.getAttribute("content"));
  colorChange(event);
  submitColor();
};
const submitColor = () => {
  const data = {
    themeKey: themeData,
    playerKey: playerNumber,
    gridKey: gridSize,
  };
  if (!Object.values(data).includes(undefined)) {
    strtBn.classList.add("strtBn-true");
    strtBn.addEventListener("mouseenter", () => handleSumbitEnter());
    strtBn.addEventListener("mouseleave", () => handleSubmitLeave());
  }
};

const handleSubmit = () => {
  localStorage.clear();
  const data = {
    themeKey: themeData,
    playerKey: playerNumber,
    gridKey: gridSize,
  };
  if (!Object.values(data).includes(undefined)) {
    localStorage.setItem("localData", JSON.stringify(data));
    location.href = "gamepage.html";
  }
};
const handleSumbitEnter = () => {
  strtBn.style.backgroundColor = "#ffb84a";
};
const handleSubmitLeave = () => {
  strtBn.style.backgroundColor = "orange";
};
const aggregateRun = (array, condition) => {
  array.forEach((item) => {
    condition === "addclass" ? addClass(item) : reverseClass(item);
  });
};
const handleExpandClick = (event) => {
  const eventId = event.target.id;
  document.querySelector(`.${eventId}`).classList.toggle("display");
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

const classAnimation = (event, state) => {
  element = event.target;
  element.className = "el-clicked";
  element.addEventListener("animationend", () => {
    state === "home"
      ? (window.location.href = "../html/start.html")
      : window.location.reload();
  });
};
const reload = (event) => {
  classAnimation(event, "reload");
};
const reloadExt = (event) => {
  childClassRemove(event);
  reload(event);
};
const home = (event) => {
  classAnimation(event, "home");
};
const homeExt = (event) => {
  childClassRemove(event);
  home(event);
};
const doubler = (value) => {
  return value.toString().length < 2 ? "0" + value : value;
};
const scrapeData = (data) => {
  let newObj = {};
  Array.from(data).forEach((item) => {
    newObj[item.firstChild.innerText] = item.lastChild.innerText;
  });
  return newObj;
};
const descending = (arr) => {
  let list = Object.fromEntries(
    Object.entries(arr).sort((a, b) => b[1] - a[1])
  );
  return list;
};
const handleMouseEnter = (event) => {
  const element = event.target;
  if (element.children.length > 1) {
    element.lastChild.className = "paragraph";
  }
  element.firstChild.classList.toggle("hoveredSvg");
};
const handleMouseLeave = (event) => {
  const element = event.target;
  if (element.children.length > 1) {
    element.lastChild.className = "";
  }
  element.firstChild.classList.toggle("hoveredSvg");
};
