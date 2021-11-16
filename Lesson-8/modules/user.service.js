function updateUserInformation(uid, info) {
	const db = firebase.firestore()
	return db.collection("users")
		.doc(uid)
		.set(info)
}
function getUserInformation(uid) {
	const db = firebase.firestore()
	return db.collection("users")
		.doc(uid)
		.get().then((doc) => {
			if (doc.exists) {
				return doc.data();
			}
			return {}
		})

}
export { updateUserInformation, getUserInformation }