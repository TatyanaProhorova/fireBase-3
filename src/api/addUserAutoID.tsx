import { collection, addDoc } from 'firebase/firestore';

import { db } from './fBStoreConstants';

//add user
//Добавляет новый документ в коллекцию users.
//В этом случае Cloud Firestore автоматически генерирует идентификатор документа.
export const createUserAutoID = async (profile: object) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), profile);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
