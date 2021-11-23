const getConversationsOf = (userId) => {
	const db = firebase.firestore()
	return db.collection("conversations")
		.where("participants", "array-contains", userId)
		.get().then((snapshot) => {
			const convers = []
			snapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				convers.push({
					id: doc.id,
					...doc.data()
				})
			})
			return convers
		})
}
const getMessagesOf = (converId) => {
	const db = firebase.firestore()
	return db.collection("messages")
		.where("conversationId", "==", converId)
		.get().then((snapshot) => {
			const convers = []
			snapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				convers.push({
					// id: doc.id,
					...doc.data()
				})
			})
			return convers
		})
}
export { getConversationsOf, getMessagesOf }