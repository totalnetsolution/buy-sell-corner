
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, 
 } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, 
    collection, 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDugzyIqoy_AqN_RzsaTn-CIoQ9cs-DffA",
  authDomain: "buy-sell-corner-13c1f.firebaseapp.com",
  projectId: "buy-sell-corner-13c1f",
  storageBucket: "buy-sell-corner-13c1f.appspot.com",
  messagingSenderId: "69339340088",
  appId: "1:69339340088:web:2fa1a0d2c8ad125ea2b5cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = firebase.initializeApp(firebaseConfig);
export const Auth = getAuth();
export const Firestore = getFirestore();
