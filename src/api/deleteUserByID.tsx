import { db } from './fBStoreConstants';

import {
  doc,
  deleteDoc,
} from 'firebase/firestore';


//delete User by ID
//await deleteDoc(getUsers());
export const deleteUserByID = (uid: string) => {
    const docRef = doc(db, 'users', uid);
    deleteDoc(docRef).then(() => {
      console.log('document deleted ok!');
    });
  };
