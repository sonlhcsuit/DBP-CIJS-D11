import { Car } from "./Car.js";

class Lamboghini extends Car {
    // derived 
    lamboId = null
    constructor(name, price, owner) {
        // super() // đang gọi constructor của Base class (Car )
        // super.stop
        // thay vì this
        // console.log(super.NO_SEATS) -> super chỉ refer tới instance property/ method
        // 3 cách alternative
        super(name, "Lamboghini", price, owner)
        // ---------
        // super(name,null,price,owner)
        // this.brand = "Lamboghini"
        // --------- 
        // super() 
        // this.name = name
        // this.brand = "Lamboghini"
        // this.price = price
        // this.owner = owner
        this.lamboId = 123
    }

    // khai bao moi 1 vai method
    open(){
        console.log("The lamboghini car is Open by Scissor way")
    }

    // override - ghi đè 
    run(){
        console.log(`Supereme ${this.brand} ${this.name} is running`)
    }


}


export { Lamboghini }