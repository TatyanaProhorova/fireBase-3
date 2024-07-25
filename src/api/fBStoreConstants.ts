import { initializeApp } from 'firebase/app';

import { collection, getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

export const app = initializeApp(firebaseConfig);
// Initialize Cloud F i r e s t o r e and get a reference to the service
export const db = getFirestore(app);
// export const userCollection = 'users';

export const collectionRef = collection(db, 'users');
