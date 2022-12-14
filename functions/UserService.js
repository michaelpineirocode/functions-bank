const functions = require("firebase-functions")
const firebaseAdmin = require("firebase-admin")
const {collection, getDoc, doc, setDoc} = require("firebase/firestore")

exports.createUser = async function createUser(user) {
    try {
        const newUser = {
            guid: user.uid,
            email: user.email,
            login: false,
        }
        await setDoc(doc(db, "Users", user.uid), newUser)
        return newUser
    } catch(e) {
        throw new Error(`Trouble creating a new user: ${e}`)
    }
}

/**
 * returns user object if user exists, if the user doesn't exist, it creates a user and returns it
 * @param {*} request googles authentication user impl
 */
exports.isUser = functions.https.onRequest(async (request, response) => {
    try {
        const user = firebaseAdmin.firestore.collection("Users").doc(`${request.body.uid}`).get()
        functions.logger.log(`User ID: ${request.body.uid}`)
        if (user.uid.length == 0) {
            return await createUser(request.body)
        } else {
            return response.body
        }
    } catch(e) {
        throw new Error(e)
    }
})