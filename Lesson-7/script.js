import { } from "./modules/setup.js" // nhận side effect
import { SignUp, SignIn, Home } from "./pages/index.js"
import {SignInSuccessEvent,ToSignUpEvent,ToSignInEvent}  from "./modules/event.js"

class Application {
	home
	signIn
	signUp

	constructor() {
		this.main = document.getElementById("main") // 
		this.signIn = new SignIn()
		this.signUp = new SignUp()
		this.home = new Home()
		this.setup()
	}
	setup(){
		this.main.addEventListener(ToSignInEvent.EVENT_NAME,()=>{
			console.log("Render Sign In page")
			this.renderSignIn()			
		})
		this.main.addEventListener(ToSignUpEvent.EVENT_NAME,()=>{
			console.log("Render Sign Up Page ")
			this.renderSignUp()
		})



		this.main.addEventListener(SignInSuccessEvent.EVENT_NAME,  (e)=> {
			// const { displayName, email, photoURL } = e.detail
			// console.log(this)
			// this.home.setUser({
			// 	name: displayName,
			// 	email: email,
			// 	avatar: photoURL
			// })
			// this.renderHome()
		})
	}
	renderSignUp(){
		this.main.innerHTML = ""
		this.main.insertAdjacentElement("afterbegin",this.signUp.html())
	}
	renderSignIn() {
		this.main.innerHTML = ""
		this.main.insertAdjacentElement("afterbegin", this.signIn.html())
		
	}

	renderHome(){
		this.main.innerHTML = ""
		this.main.insertAdjacentElement("afterbegin", this.home.html())		
	}

	run() {
		// this.renderSignUp()
		this.renderSignIn()
	}

}

const app = new Application()
app.run()