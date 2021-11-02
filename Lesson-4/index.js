// static
// kế thừa và đa hình 
// 


// const car = new Car()
// car.method()
// car.someFunction()

// gom được nhiều thuộc tính & hành động liên quan tới nhau để dễ quản lý

// Car.someFunction()

// const date = new Date()
// const mycar = Car.fromDateString()
// unix time 1 con số 1/1/1970 -> hiện tại đã trải qua bao nhiêu giây
// date string : 13 Nov 2021 
// date-time string 21:00 13 Nov 2021

// import { Lamboghini } from "./modules/Lamboghini.js";
// import { Car } from "./modules/Car.js";
// import { Aventador } from "./modules/Lamboghini.Aventador.js";
// import { Huracan } from "./modules/Lamboghini.Huracan.js";
// const car = new Car("civic", "honda", "1", "son")
// // car.run()
// // car.stop()

// const lambo = new Lamboghini("aventador", 10, "son")

// // lambo.run()
// // lambo.stop()
// // lambo.open()
// const cars = [
//     new Aventador(100, "Son"),
//     // >100 cai xe 
//     new Huracan(100, "Son"),
//     new Aventador(100, "Son"),
//     new Huracan(100, "Son"),
//     new Aventador(100, "Son"),
//     new Aventador(100, "Son"),
//     new Huracan(100, "Son"),
// ]


// // chay het 100 cai xe 
// for (const c of cars) {
//     c.run()
// }

// ----------- Web Component --------------

const data = [
    { src: "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=", title: "The Black Dragon" },

    { src: "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=", title: "The Black Dragon" },
    { src: "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=", title: "The Black Dragon" },
    { src: "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=", title: "The Black Dragon" },
    { src: "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=", title: "The Black Dragon" },
]
// Các cách tạo ra hàng loạt html element như nhau
// Cách 1 - Dùng insertAdjacentHTML kết hợp function
// function createCard({ src, title }) {
//     return `
//     <div>
//         <img src="${src}" alt="${title}">
//         <p>${title}</p>
//     </div>
//     `
// }


// for (const d of data) {
//     let element = createCard(d)
//     document.getElementById("main").insertAdjacentHTML("beforeend",element)
// }

// Cách 2 - 

// class Card {
//     element = null
//     constructor({ src, title }) {
//         const div = document.createElement("div")
//         const img = document.createElement("img")
//         const p = document.createElement("p")
//         img.src = src
//         img.alt = title
//         p.innerHTML = title
//         div.appendChild(img)
//         div.appendChild(p)
//         this.element = div
//     }

//     render(id, position) {
//         document.getElementById(id).insertAdjacentElement(position, this.element)\l
//     }
// }

// for (const d of data) {
//     const card = new Card(d)
//     card.render("main", "beforeend")
// }


// Cách 3 Web Component

import { Card } from "./components/Card.js"

const card = document.createElement("my-card")
card.setAttribute("title", "The Black Dragon")
card.setAttribute("src", "https://media.istockphoto.com/vectors/black-dragon-sign-vector-id852707652?k=20&m=852707652&s=170667a&w=0&h=C9J-vcurapdnOiWmC_ey98GfRW6uDglziscpeuI0jSs=")
console.log(card)
document.getElementById("main").insertAdjacentElement("beforeend",card)