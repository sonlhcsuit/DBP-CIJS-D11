class Conversation {
	avatar = null
	title = null
	lastMessage = null

	constructor({ avatar, title, lastMessage }) {
		this.avatar = avatar
		this.title = title
		this.lastMessage = lastMessage
		this.setupUI()
	}
	setupUI() {
		const main = document.createElement("div")
		const side = document.createElement("div")
		const avt = document.createElement("img")
		const title = document.createElement("h3")
		const msg = document.createElement("p")

		avt.setAttribute("src", this.avatar)
		title.innerHTML = this.title
		msg.innerHTML = this.lastMessage
		main.classList.add("home-sider-conversation")
		// main.classList.add("border")
		main.appendChild(avt)
		side.appendChild(title)
		side.appendChild(msg)
		// side.classList.add("border")
		main.appendChild(side)
		this.main = main
	}
	html() {
		return this.main
	}
}
export { Conversation }