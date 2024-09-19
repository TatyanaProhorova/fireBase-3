import { collection, addDoc } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { Roles, Student, Teacher } from '../types.ts';


//add user
//Добавляет новый документ в коллекцию users.
//В этом случае Cloud Firestore автоматически генерирует идентификатор документа.
export const addUserAutoID = async (profile: Student | Teacher) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), profile);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
