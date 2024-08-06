import { 
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
   } from 'firebase/firestore';

import { db } from './fBStoreConstants';

import { initializeApp } from 'firebase/app';

import {
  getDoc,


  doc,
  updateDoc,
  deleteDoc,
  deleteField,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

//Это конфигурация Firebase, у каждого проекта она своя. Её нужно скопировать из консоли вашего проекта


interface User {
  email: string;
  password: string;
}


// Initialize Cloud Firestore and get a reference to the service

const userCollection = 'users';

//\\
// const collectionRef = collection(db, 'users');

export const getUsers = async () => {
    const result: User[] = [{ email: 'start', password: 'passStart' }];
    try {
      const q = query(collection(db, userCollection));
      //const q = query(collection(db, userCollection), where('first', '==', 'Ada'));
      const docsSnapshot = await getDocs(q);
  
      docsSnapshot.forEach((doc) => {
        const data = doc.data() as User;
        result.push(data);
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };