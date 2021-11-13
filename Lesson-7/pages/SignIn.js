import { SignInSuccessEvent, ToSignUpEvent } from "../modules/event.js"
class SignIn {
	constructor() {
		this.initializeUI()
		this.setup()

	}
	initializeUI() {
		const main = document.createElement("form")

		const email = document.createElement("input")
		const emailLabel = document.createElement("p")

		const password = document.createElement("input")
		const passwordLabel = document.createElement("p")

		const button = document.createElement("input")
		const toSignUp = document.createElement("input")
		const gbtn = document.createElement("input")

		email.setAttribute("type", "text")
		email.setAttribute("placeholder", "Enter your email")
		email.classList.add("sign-in-form-component")
		emailLabel.innerHTML = "Enter your email"
		emailLabel.classList.add("sign-in-form-label")

		password.setAttribute("type", "password")
		password.setAttribute("placeholder", "Enter password")
		password.classList.add("sign-in-form-component")
		passwordLabel.innerHTML = "Enter your email"
		passwordLabel.classList.add("sign-in-form-label")

		button.setAttribute("type", "button")
		button.setAttribute("value", "Sign In")
		button.classList.add("sign-in-form-component")


		toSignUp.setAttribute("type", "button")
		toSignUp.setAttribute("value", "Sign up now with your email")
		toSignUp.classList.add("sign-in-form-component")

		// sign in by g-acount
		gbtn.setAttribute("type", "button")
		gbtn.setAttribute("value", "Sign in Using Google")
		gbtn.classList.add("sign-in-form-component")
		// append child

		main.appendChild(emailLabel)
		main.appendChild(email)
		main.appendChild(passwordLabel)
		main.appendChild(password)

		main.appendChild(button)
		main.appendChild(toSignUp)
		main.appendChild(gbtn)
		// main.innerHTML = "Text from Sign In Form"
		main.classList.add("sign-in-form")
		this.main = main
		this.gbtn = gbtn
		this.toSignUp = toSignUp
	}
	setup() {
		this.toSignUp.addEventListener("click", () => {
			console.log("click change")
			this.main.dispatchEvent(new ToSignUpEvent())
		})

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