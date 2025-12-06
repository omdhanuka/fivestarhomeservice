import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// ⚠️ REPLACE WITH YOUR FIREBASE PROJECT CONFIGURATION
// Get these values from Firebase Console > Project Settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // UPDATE
  authDomain: "YOUR_AUTH_DOMAIN", // UPDATE
  projectId: "YOUR_PROJECT_ID", // UPDATE
  storageBucket: "YOUR_STORAGE_BUCKET", // UPDATE
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // UPDATE
  appId: "YOUR_APP_ID" // UPDATE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and storage
export const auth = getAuth(app);
export const storage = getStorage(app);
