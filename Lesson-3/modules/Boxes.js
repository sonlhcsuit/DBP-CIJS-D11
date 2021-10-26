import { Box } from "./Box.js";
class Boxes {
    boxes = null
    boxesArray = []
    constructor(amount) {
        this.amount = amount
        const boxes = document.createElement("div")
        boxes.classList.add("boxes")
        for (let i = 0; i < amount; i++) {
            const box = new Box()
            boxes.insertAdjacentElement("beforeend", box.html())  
            this.boxesArray.push(box)      
        }
        this.boxes = boxes
    }
    initColor(trueColor, falseColor) {
        // random ngau nhien 1 thang con cho false color
        // tat ca nhung nguoi con lai thi true color
        const random = parseInt(Math.random()*this.amount)
        for(let i =0;i< this.amount;i++){
            if(i==random){
                this.boxesArray[i].setColor(falseColor)
            }else{
                this.boxesArray[i].setColor(trueColor)
            }
        }
    }
    html() {
        return this.boxes
    }
}

export { Boxes }