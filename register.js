// Firebase services imports
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

// Import Firebase app initialization (this is important)
import { app } from "./firebase-config.js"; // Make sure this path is correct

// Use the initialized app to get services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePicture = document.getElementById('profile-picture').files[0];

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Upload profile picture to Firebase Storage
        const storageRef = ref(storage, `profile_pictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
        const profilePictureUrl = await getDownloadURL(storageRef);

        // Save additional user info to Firestore
        await setDoc(doc(db, "users", user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            profilePictureUrl: profilePictureUrl
        });

        alert("User registered successfully!");

    } catch (error) {
        console.error("Error registering user:", error);
        alert("Error registering user: " + error.message);
    }
});
