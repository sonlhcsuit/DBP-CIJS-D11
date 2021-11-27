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

class SelectConversationEvent extends CustomEvent {
	static EVENT_NAME = "select_conversation"
	constructor(data) {
		if (typeof data === "object") {
			super(SelectConversationEvent.EVENT_NAME, { bubbles: true, detail: data })
		} else {
			super(SelectConversationEvent.EVENT_NAME, { bubbles: true })
		}
	}
}
class MessageSent extends CustomEvent {
	static EVENT_NAME = "message_sent"
	constructor(data) {
		if (typeof data === "object") {
			super(MessageSent.EVENT_NAME, { bubbles: true, detail: data })
		} else {
			super(MessageSent.EVENT_NAME, { bubbles: true })
		}
	}
}
export { SignInSuccessEvent, ToSignInEvent, ToSignUpEvent, SelectConversationEvent,MessageSent }