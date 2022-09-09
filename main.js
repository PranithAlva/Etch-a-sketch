console.log("hello world");

let Systemcolor = "rgb(0,0,0)";

const boxButton = document.getElementById("box-button");
const editButton = document.getElementById("edit-button");

boxButton.addEventListener("click", () => {
	const box = document.getElementById("box");
	box.classList.toggle("not-visible");
});
editButton.addEventListener("click", () => {
	const edit = document.getElementById("edit");
	edit.classList.toggle("not-visible");
});

const color = document.querySelector("#color");

function dissappear() {
	const loadingScreen = document.getElementById("loading-screen");
	loadingScreen.classList.add("not-visible");
}

function handleUpdate() {
	Systemcolor = this.value;
	document.documentElement.style.setProperty("--color", this.value);
}

function rainbowColor() {
	colorSet = [
		"rgb(255,0,0)",
		"rgb(0,255,0)",
		"rgb(0,0,255",
		"rgb(75, 0, 130)",
		"rgb(238, 130, 238)",
		"rgb(255, 255, 0)",
		"rgb(255, 165, 0)",
	];
	let check = document.querySelector("#rainbow");
	if (check.checked) {
		const index = Math.floor(Math.random() * colorSet.length);

		Systemcolor = colorSet[index];
		document.documentElement.style.setProperty("--color", Systemcolor);
	}
}
function changeColor() {
	console.log(Systemcolor);
	this.style.background = Systemcolor;
}

color.addEventListener("input", handleUpdate);

//setTimeout();

function handleClick() {
	if (this.dataset.value == "white") {
		Systemcolor = "white";
		return;
	}
	if (this.dataset.value == "all") {
		let gridBoxes = document.querySelectorAll(".grid-box");
		gridBoxes.forEach((gridBox) => (gridBox.style.background = "white"));
		return;
	}
	const gridLength = this.dataset.value;
	let sketchBox = document.querySelector("#sketch-box");
	if (gridLength != sketchBox.dataset.value) {
		const sketchContainer = document.querySelector("#sketch-container");
		const currentClass = sketchBox.classList.value;
		sketchContainer.removeChild(sketchBox);

		sketchBox = document.createElement("div");
		sketchBox.setAttribute("id", "sketch-box");
		sketchBox.setAttribute("data-value", gridLength);
		sketchBox.classList.add(`sketch-box${gridLength}`);
		sketchContainer.appendChild(sketchBox);
		for (let i = 0; i < gridLength * gridLength; i++) {
			const gridBox = document.createElement("div");
			gridBox.classList.add("grid-box");
			console.log(gridBox);
			sketchBox.appendChild(gridBox);
			console.log(gridBox);
			gridBox.addEventListener("mouseover", changeColor);
		}
	}
}
const menuButtons = document.querySelectorAll(".menu-button");

const sketchContainer = document.querySelector("#sketch-container");

menuButtons.forEach((button) => button.addEventListener("click", handleClick));
const gridBoxes = document.querySelectorAll(".grid-box");

gridBoxes.forEach((gridBox) => {
	gridBox.addEventListener("mouseover", changeColor);
});

const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("change", () => setInterval(rainbowColor, 500));

setTimeout(dissappear, 5500);
