import { SignInSuccessEvent } from "../modules/event.js"
class SignIn {
	constructor() {
		const main = document.createElement("form")

		// email + password
		const email = document.createElement("input")
		const password = document.createElement("input")
		const button = document.createElement("input")
		email.setAttribute("type", "text")
		email.setAttribute("placeholder", "Enter username / email")
		password.setAttribute("type", "password")
		password.setAttribute("placeholder", "Enter password")
		button.setAttribute("type", "button")
		button.setAttribute("value", "Sign In")

		// sign in by g-acount
		const gbtn = document.createElement("input")
		gbtn.setAttribute("type", "button")
		gbtn.setAttribute("value", "Sign in Using Google")
		gbtn.classList.add("gbtn")

		// append child

		main.appendChild(email)
		main.appendChild(password)
		main.appendChild(button)
		main.appendChild(gbtn)
		// main.innerHTML = "Text from Sign In Form"
		this.main = main
		this.gbtn = gbtn
		this.setup()

	}
	setup() {
		this.gbtn.addEventListener("click", () => {
			const provider = new firebase.auth.GoogleAuthProvider();
			// O - auth
			firebase.auth()
				.signInWithPopup(provider)
				.then((result) => {
					/** @type {firebase.auth.OAuthCredential} */
					var credential = result.credential;

					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = credential.accessToken;
					// The signed-in user info.
					var user = result.user;

					this.main.dispatchEvent(
						new SignInSuccessEvent({
							...user
						})
					)
				}).catch((error) => {
					console.log(error)
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				});


		})
	}

	html() {
		return this.main
	}
}
export { SignIn }