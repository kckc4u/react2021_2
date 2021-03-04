import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBtmu7KpQFzc7s--jJZT2WrKoFGblQeQeE",
  authDomain: "crwn-store-880f1.firebaseapp.com",
  projectId: "crwn-store-880f1",
  storageBucket: "crwn-store-880f1.appspot.com",
  messagingSenderId: "345953827870",
  appId: "1:345953827870:web:04ee438523a889f0ac020f",
  measurementId: "G-1JPZ2V6LJY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.dir(snapshot);
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }

    }

    return userRef;

}

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;