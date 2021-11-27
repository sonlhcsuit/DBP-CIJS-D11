import { Message } from "./Message.js"
import { MessagePrompt } from "./MesasgePrompt.js"
class Content {
	constructor() {
		const main = document.createElement("div")
		const messagesComponent = document.createElement("div")
		const prompt = new MessagePrompt()
		messagesComponent.classList.add("home-content-messages")
		main.classList.add("home-content")
		// main.classList.add(")

		this.main = main
		this.messagesComponent = messagesComponent
		this.prompt = prompt
		this.setupUI()

	}
	setupUI() {
		this.main.innerHTML = ""
		this.messagesComponent.innerHTML = ""
		this.main.appendChild(this.messagesComponent)
		this.main.appendChild(this.prompt.html())	
	}

	clear() {
		this.setupUI()
	}

	addMessage(message){
		let me = new Message(message)
		this.messagesComponent.appendChild(me.html())	
	}

	html() {
		return this.main
	}
}
export { Content }