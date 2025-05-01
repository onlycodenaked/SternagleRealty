import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2FronV33H8PXeE6DXlFk6XN3zLYzGRtg",
  authDomain: "sternaglerealty-3f645.firebaseapp.com",
  projectId: "sternaglerealty-3f645",
  storageBucket: "sternaglerealty-3f645.firebasestorage.app",
  messagingSenderId: "1061804692816",
  appId: "1:1061804692816:web:ad5d19baba0f7793d00855",
  measurementId: "G-FYTNPWM3MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
