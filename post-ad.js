import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const db = getFirestore();
document.getElementById('post-ad-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('ad-title').value;
    const description = document.getElementById('ad-description').value;
    const price = document.getElementById('ad-price').value;

    try {
        const docRef = await addDoc(collection(db, "ads"), {
            title,
            description,
            price
        });
        alert("Ad posted successfully!");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});
