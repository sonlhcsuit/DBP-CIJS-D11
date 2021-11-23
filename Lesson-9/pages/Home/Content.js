import { Message } from "./Message.js"
class Content {
	constructor() {
		this.messages = null//messages
		const main = document.createElement("div")
		main.classList.add("home-content")
		main.classList.add("border")

		this.main = main
		this.setupUI()

	}
	setupUI() {
		if (!this.messages) return

		this.main.innerHTML = ""
		for (const m of this.messages) {
			let me = new Message(m)
			this.main.appendChild(me.html())
		}
	}
	setMessages(messages) {
		this.messages = messages
		this.setupUI()
	}
	html() {
		return this.main
	}
}
export { Content }