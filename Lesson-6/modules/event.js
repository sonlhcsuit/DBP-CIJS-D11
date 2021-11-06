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
export { SignInSuccessEvent }