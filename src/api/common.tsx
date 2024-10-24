import { getDoc, doc } from 'firebase/firestore';

import { db } from './fBStoreConstants';

/**
 * Функция для получения документа по его идентификатору
 * @param {string} collectionName - название коллекции
 * @param {string} documentId - идентификатор документа
 */
export async function getById<T>(collectionName = 'users', documentId: string) {
  const documentRef = doc(db, collectionName, documentId);

  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) {
    console.log('Document data:', documentSnapshot.data());
    return documentSnapshot.data() as T;
  } else {
    console.log('No such document');
    return null;
  }
}
