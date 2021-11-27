class Information {
	avatar = null
	title = null
	lastMessage = null

	constructor(user) {
		const { avatar, name } = user
		this.avatar = avatar
		this.name = name
		this.id = user.id
		this.setupUI()
	}
	setupUI() {
		const main = document.createElement("div")
		const avt = document.createElement("img")
		const name = document.createElement("h3")

		avt.setAttribute("src", this.avatar)
		main.classList.add("home-sider-information")
		name.innerHTML = this.name
		// main.classList.add("border")
		main.appendChild(avt)
		// side.classList.add("border")
		main.appendChild(name)
		this.main = main
	}
	html() {
		return this.main
	}
}
export { Information }