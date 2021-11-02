import { Lamboghini } from "./Lamboghini.js";
class Huracan extends Lamboghini {
    constructor(price, owner) {
        super("Huracan", price, owner)
    }
    run() {
        super.run()
        console.log("  ___")
        console.log("    _-_-  _/\______\\\\__")
        console.log(" _-_-__  / ,-. -|-  ,-.`-.")
        console.log("    _-_- `( o )----( o )-'")
        console.log("           `-'      `-'")
    }
}
export { Huracan }