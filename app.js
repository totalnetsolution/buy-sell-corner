import { getFirestore, 
    collection, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const db = getFirestore();
const productsList = document.getElementById('products-list');

async function fetchAds() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    querySnapshot.forEach((doc) => {
        const ad = doc.data();
        productsList.innerHTML += `<div>
            <h3>${ad.title}</h3>
            <p>${ad.description}</p>
            <p>${ad.price}</p>
            <a href="single-ad.html?id=${doc.id}">View Ad</a>
        </div>`;
    });
}

fetchAds();
