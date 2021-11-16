import { conversations } from "../../modules/constant.js"
import { Conversation } from "./Conversation.js"
conversations
class Sider {
	constructor() {
		const main = document.createElement("div")
		main.classList.add("home-sider")
		main.classList.add("border")
		for (let i = 0; i < conversations.length; i++) {
			const c = new Conversation(conversations[0])
			main.appendChild(c.html())
		}
		this.main = main
	}
	html() {
		return this.main
	}
}
export { Sider }