// Converting from Nodelist to Array with Array.from()
//const boxes = Array.from(document.querySelectorAll(".box"));

// Converting from Nodelist to Array with spread operator
const boxes = [...document.querySelectorAll(".box")];

boxes.forEach((box) => (box.style.backgroundColor = "dodgerblue"));

boxes.filter((box) => !box.includes("blue")).forEach((box) => (box.textContent = "I changed to blue"));
