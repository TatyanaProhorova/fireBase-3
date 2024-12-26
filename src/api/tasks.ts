import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { TypeTask } from '../shared/types/task';
import { Task } from '../shared/types/task';


const taskCollection = 'tasks';

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

/**
 * Функция для получения заданий по типу
 * @param {TaskType} type - тип задания
 */
export const getTasksByType = async <T>(type: TypeTask) => {
    const result: T[] = [];
    try {
      const q = query(collection(db, taskCollection), where('type', '==', type));
  
      const docsSnapshot = await getDocs(q);
  
      docsSnapshot.forEach((doc) => {
        // https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react
        const data = {
          id: doc.id,
          ...doc.data()
        };
        // @ts-ignore
        result.push(data as T[]);
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };
