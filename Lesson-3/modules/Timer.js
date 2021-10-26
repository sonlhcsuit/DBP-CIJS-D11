class Timer {
    time = null
    progress = null
    content = null
    interval = null

    constructor(time) {
        this.time = time;
        this.remain = time
        this.progress = document.createElement("div")
        this.progress.classList.add("progress")

        const container = document.createElement("div")
        container.dispatchEvent
        container.classList.add("progress-container")
        this.content = document.createElement("div")
        this.content.classList.add("progress-content")
        container.insertAdjacentElement("beforeend", this.content)
        this.progress.insertAdjacentElement("beforeend", container)

        this.content.addEventListener("timeup", this.timeUpHandler)
    }
    reset = () => {
        this.remain = this.time
    }
    timeUpHandler = () => {
        clearInterval(this.interval)
        this.progress.dispatchEvent(new CustomEvent("lose"))
    }
    html() {
        return this.progress
    }
    start() {
        this.interval = setInterval(() => {
            this.content.style.width = `${(this.remain - 0.1) / this.time * 100}% `
            this.remain = this.remain - 0.1

            if (this.remain < 1e-6) {
                this.content.dispatchEvent(new CustomEvent("timeup"))
            }
        }, 100)
    }
    stop(){
        clearInterval(this.interval)
    }
    render() {
        document.getElementById("main").insertAdjacentElement("beforeend", this.progress)

    }
}
export { Timer }