const functions = require("firebase-functions")
const firebaseAdmin = require("firebase-admin")
const {collection, getDoc, doc, setDoc} = require("firebase/firestore")
const userService = require("./UserService")

firebaseAdmin.initializeApp()

exports.createUser = userService.createUser
exports.isUser = userService.isUser