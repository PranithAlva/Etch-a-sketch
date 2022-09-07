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

function handleUpdate() {
	Systemcolor = this.value;
	document.documentElement.style.setProperty("--color", this.value);
}

function changeColor() {
	console.log(Systemcolor);
	this.style.background = Systemcolor;
}

color.addEventListener("input", handleUpdate);

//setTimeout();

function handleClick() {
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
