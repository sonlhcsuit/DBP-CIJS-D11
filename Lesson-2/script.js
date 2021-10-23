// import { addition, subtraction } from "./modules/math.js"
// const result = addition(1, 2)
// let r = subtraction(4, 9)

// Programming Style -> code de hon, de bao quan, duy tri , re
// mọi thứ đều được cấu tạo từ Class - Lớp & Object - đối tượng

function createPerson(name, job) {
    return {
        // property
        name: name,
        job: job,
        // method | behavior
        run() {
            console.log('Running')
        }
    }
}

// let guy = createPerson("Quang", "Student")

// const person = {
//     // property
//     name: "Son",
//     job: "Mindx",
//     // method | behavior
//     run() {
//         console.log('Running')
//     }
// }
// const person2 = {
//     name: "Dung",
//     job: "Mindx",
//     run() {
//         console.log("Dung is running")
//     }
// }
// person.run()
// person2.run()

class Car {
    // property (attribute)
    name = null;
    brand = null;
    price = null;
    engine = null;
    // this - refer to the instance of the class
    constructor(name, brand, price, engine) {
        this.brand = brand
        this.name = name
        this.price = price
        this.engine = engine
    }
    run(){
        console.log(`The car ${this.name} is running`)
    }

}

const myCar = new Car("Aventador", "Lamboghini", 1, "V8")
mycar // -> instance of Class
console.log(myCar.name, myCar.brand, myCar.price)
console.log(Car.name)

// SOLID - Class
// Design Pattern

// 4 tính chất
// đóng gói | trừu tượng | kế thừa | đa hình