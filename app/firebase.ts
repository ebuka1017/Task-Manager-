import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQHqZniiW1qSqn1o4EONUF7TkoRrvvpUQ",
  authDomain: "task-manager-7d426.firebaseapp.com",
  projectId: "task-manager-7d426",
  storageBucket: "task-manager-7d426.firebasestorage.app",
  messagingSenderId: "480303785595",
  appId: "1:480303785595:web:81f062b3eb890bf307a4de",
  measurementId: "G-KY627XP01M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

