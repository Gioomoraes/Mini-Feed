import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPUyfU3ajvr1um7SUbaX-WugzHgbL0yiQ",
  authDomain: "minifeed-995ce.firebaseapp.com",
  projectId: "minifeed-995ce",
  storageBucket: "minifeed-995ce.firebasestorage.app",
  messagingSenderId: "88020526383",
  appId: "1:88020526383:web:458de13a661a8f32f46dda",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
