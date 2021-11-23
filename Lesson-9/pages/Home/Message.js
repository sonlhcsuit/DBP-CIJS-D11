// core idea cơ bản của react : dựa trên components
class Message {
	constructor({ incomming, content }) {
		const main = document.createElement("div")
		const p = document.createElement("p")
		p.innerHTML = content
		main.classList.add("message")
		if (incomming) main.classList.add("incomming")
		else main.classList.add("outcomming")
		main.appendChild(p)
		this.main = main
	}
	html() {
		return this.main
	}
}
export { Message }