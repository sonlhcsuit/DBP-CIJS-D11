import { Box } from "./modules/Box.js";
const NoBox = 5;
const boxes = []
for (let i = 0; i < NoBox; i++) {
    boxes.push(new Box)
}

const app = document.getElementById("app")
console.log(app)
for (let box of boxes) {
    app.insertAdjacentElement("beforeend", box.html())
}