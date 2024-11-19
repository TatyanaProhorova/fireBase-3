import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { Roles } from '../shared/types/user';

const userCollection = 'users';

/**
 * Функция для получения списка пользователей по роли
 * @param {Roles} role - роль пользователя
 */
export const getUsersByRole = async <T>(role: Roles) => {
  const result: T[] = [];
  try {
    const q = query(collection(db, userCollection), where('role', '==', role));

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
 * Функция получения данных пользователя по email
 * @param {string | undefined} email - email пользователя
 */

export const getUserByEmail = async <T>(email: string) => {
  const result: T[] = [];
  try {
    const q = query(collection(db, userCollection), where('email', '==', email));

    const docsSnapshot = await getDocs(q);

    docsSnapshot.forEach((doc) => {

      const data = {
        ...doc.data()
      };

    result.push(data as T);

  })} catch (error) {
    console.error(error);
  }
  return result;
};



/**
 * Функция для создания пользователя
 */
//Установите данные документа внутри коллекции, (create)
//явно указав идентификатор документа. !
//!! перезапись с тем же id  !!!
// TODO: требует доработки
export const createUserAutoID = async (profile: object) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), profile);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

/**
 * Функция для удаления пользователя
 * @param {string} userID - id пользователя
 */
// TODO: требует доработки
export const deleteUserByID = (userID: string) => {
  const docRef = doc(db, 'users', userID);
  deleteDoc(docRef).then(() => {
    console.log('document deleted ok!');
  });
};
