import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./app";


export const signIn = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error signing in:", error.message);
        throw new Error(error.message); 
    }
};

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Error signing up:", error.message);
        throw new Error(error.message)
    }
};
