import { Content } from "./Content.js"
import { Sider } from "./Sider.js"
import { SelectConversationEvent } from "../../modules/event.js"
import { getMessagesOf } from "../../modules/conversation.service.js"
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
			console.log(e.detail)
			getMessagesOf(e.detail.converId).then(data=>{
				const messages = data.map((m)=>{
					return {
						...m,
						incomming: m.of != this.user.id 
					}
				})
				this.content.setMessages(messages)

			})
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