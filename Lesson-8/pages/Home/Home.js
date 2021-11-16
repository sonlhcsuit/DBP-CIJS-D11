import { Content } from "./Content.js"
import { Sider } from "./Sider.js"
class Home {

	constructor() {

		const main = document.createElement("div")
		main.classList.add("home")
		const sider = new Sider()
		const content = new Content()
		main.appendChild(sider.html())
		main.appendChild(content.html())
		this.main = main
		this.sider = sider
		this.content = content
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