class Home {
	constructor() {
		const main = document.createElement("div")
		const name = document.createElement("p")
		const email = document.createElement("p")
		const avatar = document.createElement("img")

		main.appendChild(name)
		main.appendChild(email)
		main.appendChild(avatar)
		this.main = main
		this.name = name
		this.email = email
		this.avatar = avatar

	}
	setUser({ name, email, avatar }) {
		this.name.innerHTML = name
		this.email.innerHTML = email
		this.avatar.setAttribute("src", avatar)
	}
	html() {
		return this.main
	}
}
export { Home }