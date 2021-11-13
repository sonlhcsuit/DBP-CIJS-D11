import { ToSignInEvent } from "../modules/event.js"
class SignUp {

	constructor() {
		// main.innerHTML = "Text from Sign In Form"
		this.initializeComponent()
		this.setup()

	}
	initializeComponent() {

		const main = document.createElement("form")

		const name = document.createElement("input")
		const nameLabel = document.createElement("p")

		const email = document.createElement("input")
		const emailLabel = document.createElement("p")

		const password = document.createElement("input")
		const passwordLabel = document.createElement("p")

		const confirmPassword = document.createElement("input")
		const confirmPasswordLabel = document.createElement("p")

		const dob = document.createElement("input")
		const dobLabel = document.createElement("p")

		const button = document.createElement("input")
		const toSignIn = document.createElement("input")

		name.setAttribute("type", "text")
		name.setAttribute("placerholder", "Enter your fullname")
		name.classList.add("sign-up-form-component")
		nameLabel.innerHTML = "Enter your fullname"
		nameLabel.classList.add("sign-up-form-label")

		email.setAttribute("type", "text")
		email.setAttribute("placeholder", "Enter email")
		email.classList.add("sign-up-form-component")
		emailLabel.innerHTML = "Enter your email"
		emailLabel.classList.add("sign-up-form-label")

		dob.setAttribute("type", "date")
		dob.classList.add("sign-up-form-component")
		dobLabel.innerHTML = "Select your birthday"
		dobLabel.classList.add("sign-up-form-lable")

		password.setAttribute("type", "password")
		password.setAttribute("placeholder", "Enter password")
		password.classList.add("sign-up-form-component")
		passwordLabel.innerHTML = "Enter your password"
		passwordLabel.classList.add("sign-up-form-label")

		confirmPassword.setAttribute("type", "password")
		confirmPassword.setAttribute("placeholder", "Confirm your password")
		confirmPassword.classList.add("sign-up-form-component")
		confirmPasswordLabel.innerHTML = "Confirm your password"
		confirmPasswordLabel.classList.add("sign-up-form-label")

		button.setAttribute("type", "button")
		button.setAttribute("value", "Sign Up")
		button.classList.add("sign-up-form-component")

		toSignIn.setAttribute("type", "button")
		toSignIn.setAttribute("value", "Already has an account? Sign In Now")
		toSignIn.classList.add("sign-up-form-component")
		// append child
		main.appendChild(nameLabel)
		main.appendChild(name)
		main.appendChild(emailLabel)
		main.appendChild(email)
		main.appendChild(dobLabel)
		main.appendChild(dob)
		main.appendChild(passwordLabel)
		main.appendChild(password)
		main.appendChild(confirmPasswordLabel)
		main.appendChild(confirmPassword)
		main.appendChild(button)
		main.appendChild(toSignIn)

		main.classList.add("sign-up-form")
		this.main = main
		this.toSignIn = toSignIn

	}
	setup() {
		this.toSignIn.addEventListener("click", () => {
			this.main.dispatchEvent(new ToSignInEvent())
		})

	}

	html() {
		return this.main
	}
}

export { SignUp }