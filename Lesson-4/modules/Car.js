// encapsulation - đóng gói
// abstraction - trừu tượng
// inheritance kế thừa 
// polymerization - đa hình

class Car {
    static NO_SEATS = 4
    // định nghĩa các property của 1 class
    name = null
    brand = null
    price = null
    owner = null
    constructor(name, brand, price, owner) {
        this.name = name
        this.brand = brand
        this.price = price
        this.owner = owner
        // 
    }
    run(distance, destination) {
        console.log("the car is running")
    }
    start() {
        console.log("the car started")
    }
    stop() {
        console.log("the car stopped")
    }
    repair() {
        console.log("the car is repairing")
    }
    showInfo() {
        console.log(`${this.brand} ${this.name} ${this.price} ${this.owner}`)
    }
}
export { Car }