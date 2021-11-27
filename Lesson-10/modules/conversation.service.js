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
	return
	const db = firebase.firestore()
	return db.collection("messages")
		.where("conversationId", "==", converId)
		.orderBy("time")
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

const sendMessage = ({ content, converId, sender }) => {
	const message = {
		content: content,
		conversationId: converId,
		of: sender,
		time: Date.now()
	}
	console.log(message)
	const db = firebase.firestore()
	return db.collection("messages").add(message)
}

const subscribeConversation = (converId, cb) => {
	const db = firebase.firestore()
	return db.collection("messages")
		.where("conversationId", "==", converId)
		.orderBy("time")
		.onSnapshot((snapshot) => {
			snapshot.docChanges().forEach((change) => {
				const data = change.doc.data()
				cb(data)
			})
		})
}
export { getConversationsOf, getMessagesOf, sendMessage, subscribeConversation }