import { Lamboghini } from "./Lamboghini.js";
class Aventador extends Lamboghini {
    constructor(price, owner) {
        super("Aventador", price, owner)
    }
    run() {
        super.run()
        console.log(" ______")
        console.log("/|_||_\`.__")
        console.log("(   _    _ _\\")
        console.log("=`-(_)--(_)-' ")
    }
}

export { Aventador }