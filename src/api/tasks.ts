import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';

const taskCollection = 'tasks';

import { Task } from '../shared/types/task';

export const getTasks = async () => {
  const result: Task[] = [];
  try {
    const q = query(collection(db, taskCollection));

    const docsSnapshot = await getDocs(q);

    docsSnapshot.forEach((doc) => {
      // https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react
      const data = {
        id: doc.id,
        ...doc.data()
      };
      // @ts-ignore
      result.push(data as Task[]);
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};
