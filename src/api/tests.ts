import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { TestType } from '../shared/types/tests';

const testCollection = 'tests';
/**
 * Функция для получения типов заданий
 */

export const getAllTests = async () => {
  const result: TestType[] = [];
  try {
    const q = query(collection(db, testCollection));

    const docsSnapshot = await getDocs(q);

    docsSnapshot.forEach((doc) => {
      // https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react
      const data = {
        id: doc.id,
        ...doc.data()
      };
      // @ts-ignore
      result.push(data as TestType[]);
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};
