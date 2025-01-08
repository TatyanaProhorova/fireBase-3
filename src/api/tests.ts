import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { TestType } from '../shared/types/tests';

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
 * Функция для записи параметров теста в коллекци> "tests"
 * @param {object} fields - { номер темы (number):число заданий (string) }
 */
//fields - { номер темы (number):число заданий (string) }

 export const createTest = async (fields: object) => {
//   const deleteObjectItemByValue = (Obj, val) => {
//     for (var key in Obj) {
//         if (Obj[key] == val) {
//             delete Obj[key];
//             return Obj;
//         }
//     }
// };
//  const deleteObjectItemByValue(fields, "0");
 
  try {
    const testTime: Date = new Date();
    const docRef = await addDoc(collection(db, 'tests'), {...fields,
                                       "testTimestamp": testTime});
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

