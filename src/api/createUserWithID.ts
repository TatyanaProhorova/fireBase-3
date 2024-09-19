
import { db } from './fBStoreConstants';

import { doc, setDoc } from "@firebase/firestore";


//Установите данные документа внутри коллекции, (create)
//явно указав идентификатор документа. !
//!! перезапись с тем же id  !!!
export const createUserWithID = async (collectionName: string, id: string, data: object) => {
    try {
      await setDoc(doc(db, collectionName, id), data);
      console.log('Document written with defenit ID: ', id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  