// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
}

export default initializeAuthentication;