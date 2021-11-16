import { messages } from "../../modules/constant.js"
import { Message } from "./Message.js"
class Content {
	constructor() {
		const main = document.createElement("div")
		main.classList.add("home-content")
		main.classList.add("border")
		for (const m of messages) {
			let me = new Message(m)
			main.appendChild(me.html())
		}

		this.main = main
	}
	html() {
		return this.main
	}
}
export { Content }