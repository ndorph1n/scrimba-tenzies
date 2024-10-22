import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO96gh4_TuyUISp9yg-frW8ubzeIvlDnw",
  authDomain: "crimba-project.firebaseapp.com",
  projectId: "crimba-project",
  storageBucket: "crimba-project.appspot.com",
  messagingSenderId: "746569524882",
  appId: "1:746569524882:web:d1d726b4a031fd28d2e84b",
  measurementId: "G-EMHTVBK6D7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const leadersCollection = collection(db, "leaders");
export const leadersDocs = await getDocs(leadersCollection);
