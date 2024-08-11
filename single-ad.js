import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const db = getFirestore();
const adDetails = document.getElementById('ad-details');

async function fetchAdDetails(id) {
    const docRef = doc(db, "ads", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const ad = docSnap.data();
        adDetails.innerHTML = `<div>
            <h3>${ad.title}</h3>
            <p>${ad.description}</p>
            <p>${ad.price}</p>
        </div>`;
    } else {
        console.log("No such document!");
    }
}

const urlParams = new URLSearchParams(window.location.search);
const adId = urlParams.get('id');
fetchAdDetails(adId);
