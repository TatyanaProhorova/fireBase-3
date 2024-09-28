import { 
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
   } from 'firebase/firestore';

import { db } from './fBStoreConstants';
import { Roles } from '../types';

const userCollection = 'users';

export const getUsersByRole  = async <T> (role: Roles) => {
    const result: T[] = [];
    try {
      const q = query(collection(db, userCollection),
      where('role', '==', role));
     
      const docsSnapshot = await getDocs(q);
  
      docsSnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };

//         You can use the snapshot doc.id
// I like to add id as a property to the object:

// snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})) 
// https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react

            // result.push(data as any)
            // generic в  =>  функциях
            // @ts-ignore
        result.push(data as T[])         
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };
