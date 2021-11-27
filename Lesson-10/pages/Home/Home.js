import { Content } from "./Content.js"
import { Sider } from "./Sider.js"
import { SelectConversationEvent, MessageSent, ToSignInEvent } from "../../modules/event.js"
import { getMessagesOf, sendMessage, subscribeConversation } from "../../modules/conversation.service.js"

class Home {

	constructor(user) {
		this.user = user
		this.setupUI()
	}
	setupUI() {
		const main = document.createElement("div")
		main.classList.add("home")
		const sider = new Sider()
		const content = new Content()
		main.appendChild(sider.html())
		main.appendChild(content.html())
		this.main = main
		this.sider = sider
		this.content = content

		this.main.addEventListener(SelectConversationEvent.EVENT_NAME, (e) => {
			this.converId = e.detail.converId
			this.content.clear()

			if (this.unsubscribe) {
				this.unsubscribe()
				this.unsubscribe = null
			}
			this.unsubscribe = subscribeConversation(this.converId, (message) => {
				this.content.addMessage({
					...message,
					incomming: message.of != this.user.id
				})
			})

		})
		this.main.addEventListener(MessageSent.EVENT_NAME, (e) => {
			const message = e.detail.message
			const converId = this.converId
			const sender = this.user.id
			if (message && converId && sender) {
				sendMessage({
					content: message,
					converId: converId,
					sender: sender
				})
				// .then(doc => {
				// console.log(doc.id)
				// })
			} else {
				alert("Some bug happend")
			}

		})
	}
	setUser(user) {
		this.user = user
		this.sider.setUserInformation(this.user)
	}
	html() {
		return this.main
	}
}
export { Home }