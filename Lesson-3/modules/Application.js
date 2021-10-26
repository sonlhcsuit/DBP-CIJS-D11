import { Timer } from "./Timer.js"
import { Boxes } from "./Boxes.js"

class Application {
    timer = null
    boxes = null
    div = null
    trueColor = null
    falseColor = null
    constructor() {
        const main = document.createElement("div")
        main.id = "main"
        document.getElementById("body").insertAdjacentElement("afterbegin", main)
        main.addEventListener("selectColor", this.handlerSelect)
        main.addEventListener("gameLose", this.handlerLose)
        main.addEventListener("gameWin", this.handlerWin)
        
        this.main.insertAdjacentElement("beforeend", this.timer.html())
        this.main.insertAdjacentElement("beforeend", this.boxes.html())
        this.main = main
        this.timer = new Timer(5)
        this.boxes = new Boxes(9)
    }

    handlerLose = () => {
        this.timer.stop()
        console.log("You Lose")
    }

    handlerWin = () => {
        this.timer.reset()
        this.newColor()
        this.boxes.initColor(this.trueColor, this.falseColor)
    }
    randomNumber(to) {
        return parseInt(Math.random() * to)
    }
    newColor = () => {
        //      random ra màu
        let red = this.randomNumber(255)
        let green = this.randomNumber(255)
        let blue = this.randomNumber(255)
        this.trueColor = `rgb(${red}, ${green}, ${blue})`
        this.falseColor = `rgba(${red}, ${green}, ${blue}, ${0.1})`
    }
    
    handlerSelect = (event) => {
        // kiem tra
        let color = event.detail.color || null
        if (color == this.falseColor) {
            this.main.dispatchEvent(new CustomEvent("gameWin"))
        } else {
            this.main.dispatchEvent(new CustomEvent("gameLose"))
        }
    }


    start() {
        console.log("Application is running")

        this.newColor()
        this.boxes.initColor(this.trueColor, this.falseColor)
        // this.timer.render()
        this.timer.start()
    }

}

export { Application };