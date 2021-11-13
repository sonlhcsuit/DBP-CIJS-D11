function signInWithEmail(email, password) {
	return new Promise((resolve, reject) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				var user = userCredential.user;
				resolve(user)
			})
			.catch((error) => {
				reject(error)
			});
	})
}

function signUpWithEmail(email, password) {
	return new Promise((resolve, reject) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				var user = userCredential.user;
				resolve(user)
			})
			.catch((error) => {
				reject(error)
			});
	})
}

export { signInWithEmail, signUpWithEmail }