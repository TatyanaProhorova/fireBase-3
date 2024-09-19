import { 
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
   } from 'firebase/firestore';

import { db } from './fBStoreConstants';
import { Roles, Student, Teacher } from '../types';

const userCollection = 'users';

export const getUsersByRole  = async <T> (role: Roles) => {
    const result: T[] = [];
    try {
      const q = query(collection(db, userCollection),
      where('role', '==', role));
     
      const docsSnapshot = await getDocs(q);
  
      docsSnapshot.forEach((doc) => {
        const data = doc.data ();

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
