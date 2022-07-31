import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(provider)
}