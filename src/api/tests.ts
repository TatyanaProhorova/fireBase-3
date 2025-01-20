import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { TestType } from '../shared/types/tests';
import { getTasksByTheme } from './tasks';

const testCollection = 'tests';
/**
 * Функция для получения всех тестов коллекции "tests"
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

/**
 * Функция для получения тест по ID
 * @param {string} testID - тип задания
 */
export const gettTestByID = async <T>(type: TypeTask) => {
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

/**
 * Функция для записи параметров теста в коллекцию "tests"
 * @param {Record<string, string>} fields - { номер темы (number):число заданий (string) }
 */

export const createTest = async (fields: Record<string, string>) => {
  const promises: Promise<any>[] = [];

  const coveredThemes = Object.keys(fields); // testContent  -  is better!

  coveredThemes.length &&
    
     coveredThemes.forEach((key) => {
        const promise = getTasksByTheme(key, Number(fields[key]));
        promises.push(promise);
      });
  const result = await Promise.all(promises);
  const taskIds = result.reduce((item, accum) => {
    return [...accum, ...item];
  }, []);
  console.log("taskIds", taskIds);
  try {
    const testTime: Date = new Date();
    //const docRef = await addDoc(collection(db, 'tests'), { ...fields, testTimestamp: testTime });
    const docRef = await addDoc(collection(db, 'tests'), {
      testContent: taskIds,
      testTimestamp: testTime,
      coveredThemes: coveredThemes
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
