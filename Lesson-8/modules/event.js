class SignInSuccessEvent extends CustomEvent {
	static EVENT_NAME = "success"
	constructor(data) {
		if (typeof data === "object") {

			super(SignInSuccessEvent.EVENT_NAME, { bubbles: true, detail: data })
		} else {
			super(SignInSuccessEvent.EVENT_NAME, { bubbles: true })
		}
	}
}

class ToSignInEvent extends CustomEvent {
	static EVENT_NAME = "to_sign_in"
	constructor(data) {
		if (typeof data === "object") {

			super(ToSignInEvent.EVENT_NAME, { bubbles: true, detail: data })
		} else {
			super(ToSignInEvent.EVENT_NAME, { bubbles: true })
		}
	}
}
class ToSignUpEvent extends CustomEvent {
	static EVENT_NAME = "to_sign_up"
	constructor(data) {
		if (typeof data === "object") {

			super(ToSignUpEvent.EVENT_NAME, { bubbles: true, detail: data })
		} else {
			super(ToSignUpEvent.EVENT_NAME, { bubbles: true })
		}
	}
}
export { SignInSuccessEvent, ToSignInEvent, ToSignUpEvent }