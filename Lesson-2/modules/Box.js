class Box {
    divElement
    constructor() {
        this.divElement = document.createElement('div')
        this.divElement.classList.add("box")
        this.divElement.addEventListener("click", (event) => {
            this.changeColor(this.randomColor())
        })
    }
    html() {
        return this.divElement
    }
    randomNumber(to ){
        return parseInt(Math.random()*to)
    }
    randomColor(){
        let red = this.randomNumber(255)
        let green = this.randomNumber(255)
        let blue= this.randomNumber(255)
        
        return `rgb(${red}, ${green}, ${blue})`
    }
    changeColor(newColor) {
        this.divElement.style.background = newColor
    }
}

export { Box }