import { Conversation } from "./Conversation.js"
import { Information } from "./Information.js"
import { getConversationsOf } from "../../modules/conversation.service.js"
import { getUserInformation } from "../../modules/user.service.js"
class Sider {
	constructor() {
		const main = document.createElement("div")
		main.classList.add("home-sider")
		main.classList.add("border")
		this.main = main
		this.setupUI()
	}
	setupUI() {
		this.main.innerHTML = ""
		// 
		if (this.user) {
			this.main.appendChild(
				new Information(this.user).html()
			)
		}
		if (this.id) {
			getConversationsOf(this.id).then(v => {
				const partners = v.map((item) => {
					// console.log(item)
					return {
						...item,
						converId: item.id,
						partner: item.participants.filter((element) => element != this.id)[0]
					}
				}).map(obj => {
					return getUserInformation(obj.partner).then((userData) => {
						return {
							...obj,
							...userData
						}
					})
				})
				Promise.all(partners).then(conversations => {
					// console.log(conversations)
					for (let i = 0; i < conversations.length; i++) {
						const c = new Conversation(conversations[i])
						this.main.appendChild(c.html())
					}
				}
				)
				// console.log(partners)
			})

		}
	}
	setUserInformation(user) {
		this.user = user
		this.id = user.id
		this.setupUI()
	}
	html() {
		return this.main
	}
}
export { Sider }