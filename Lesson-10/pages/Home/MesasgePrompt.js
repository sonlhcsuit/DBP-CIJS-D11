import { MessageSent } from "../../modules/event.js"
class MessagePrompt {
	constructor() {
		const main = document.createElement("div")
		const inp = document.createElement("input")
		const img = document.createElement("img")
		img.src = "./assets/image/enter.png"
		inp.type = "text"
		main.classList.add("home-content-prompt")

		this.main = main
		this.icon = img
		this.inp = inp
		this.setupUI()
		this.setup()
	}
	setup() {
		this.inp.addEventListener("keypress", (e) => {
			if (e.key == "Enter") {
				this.main.dispatchEvent(
					new MessageSent({ message: e.target.value })
				)
			}
		})
	}
	setupUI() {
		this.main.innerHTML = ""
		this.main.appendChild(this.inp)
		this.main.appendChild(this.icon)

	}
	html() {
		return this.main
	}
}
export { MessagePrompt }