import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fBStoreConstants';
import { ThemeType } from '../shared/types/themes';

const themeCollection = "themes";
/**
 * Функция для получения типов заданий
 */

export const getAllThemes = async () => {
    const result: ThemeType[] = [];
    try {
      const q = query(collection(db, themeCollection));
  
      const docsSnapshot = await getDocs(q);
  
      docsSnapshot.forEach((doc) => {
        // https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react
        const data = {
          id: doc.id,
          ...doc.data()
        };
        // @ts-ignore
        result.push(data as ThemeType[]);
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };


/**
 * Функция для получения информации по теме по коду темы
 */

export const getThemeByCode = async (code: string) => {
    let result: ThemeType | null = null;
    try {
      const q = query(collection(db, themeCollection), where('code', '==', code));
  
      const docsSnapshot = await getDocs(q);
  console.log(docsSnapshot);
      docsSnapshot.forEach((doc) => {
        // https://stackoverflow.com/questions/63671237/how-to-get-document-id-of-firestore-in-react
        const data = {
          id: doc.id,
          ...doc.data()
        };

        result = data as ThemeType;
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };
