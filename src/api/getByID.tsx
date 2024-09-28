import { 
  getDoc,
  doc
 } from 'firebase/firestore';

import { db } from './fBStoreConstants';

import { Student } from '../types';


// получить отдельный документ по его идентификатору
export async function getByID(
  collectionName="users",
  documentId: string  
) {
    const documentRef = doc(db, collectionName, documentId);

    const documentSnapshot = await getDoc(documentRef);
    if (documentSnapshot.exists()) {
      console.log('Document data:', documentSnapshot.data());
      return documentSnapshot.data() as Student;
    } else {
      console.log('No such document');
      return null;
    }
  }

  
  //  const d = getDocument("users", "123");
  //  console.log(d);
  