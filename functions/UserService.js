const functions = require("firebase-functions")
const firebaseAdmin = require("firebase-admin")
const {collection, getDoc, doc, setDoc} = require("firebase/firestore")
const async = require("async")

firebaseAdmin.initializeApp()

exports.createUser = function createUser(user) {
    try {
        const user = {
            guid: user.uid,
            email: user.email,
            login: false,
        }
        setDoc(doc(db, "Users", user.uid), user)
        return user
    } catch(e) {
        throw new Error(`Trouble creating a new user: ${e}`)
    }
}

/**
 * returns user object if user exists, if the user doesn't exist, it creates a user and returns it
 * @param {*} request googles authentication user impl
 */
exports.isUser = functions.https.onRequest((request, response) => {
    try {
        const uid = firebaseAdmin.firestore.collection("Users").doc(`${request.body.uid}`).get()
        functions.logger.log(`User ID: ${request.body.uid}`)
        if (uid.length == 0) {
            return createUser(request.body)
        } else {
            return response.body
        }
    } catch(e) {
        throw new Error(e)
    }
})