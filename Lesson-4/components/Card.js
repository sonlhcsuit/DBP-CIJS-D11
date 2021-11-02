class Card extends HTMLElement {
    constructor() {
        super()
        let src = this.getAttribute("src")
        let title = this.getAttribute("title")

        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        img.src = src
        img.alt = title
        p.innerHTML = title
        div.appendChild(img)
        div.appendChild(p)

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.append(div)
    }
}
customElements.define('my-card', Card);
export { Card }