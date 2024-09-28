import { initializeApp } from 'firebase/app';

import {
  collection,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  deleteField,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

//Это конфигурация Firebase, у каждого проекта она своя. Её нужно скопировать из консоли вашего проекта
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

interface User {
  email: string;
  password: string;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const userCollection = 'users';

//\\
const collectionRef = collection(db, 'users');

// ADD FUNCTION
export async function addUser() {
  // const owner = currentUser ? currentUser.uid : 'unknown';
  // const ownerEmail = currentUser ? currentUser.email : 'unknown';

  const newUser = {
    userName: 'e',
    desc: 'created by function createUser',
    id: '6', //uuidv4(),
    email: 'dfg@gh.com',
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp()
  };

  try {
    const userReference = doc(collectionRef, newUser.id);
    await setDoc(userReference, newUser);
  } catch (error) {
    console.error(error);
  }
}
addUser();

// CRUD - Create, Read, Update, Delete
// GET, POST, PUT, PATCH, DELETE

//Добавляет новый документ в коллекцию users.
//В этом случае Cloud Firestore автоматически генерирует идентификатор документа.
export const createUserAutoID = async (profile: object) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), profile);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};


//Возвращает массив записей коллекции

export const getUsers = async () => {
  const result: User[] = [{ email: 'start', password: 'passStart' }];
  try {
    const q = query(collection(db, userCollection));
    //const q = query(collection(db, userCollection), where('first', '==', 'Ada'));
    const docsSnapshot = await getDocs(q);

    docsSnapshot.forEach((doc) => {
      const data = doc.data() as User;
      result.push(data);
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};

console.log('Получить всех Users из коллекции', getUsers());

// получить отдельный документ по его идентификатору
export async function getDocument(collectionName: string, documentId: string) {
  const documentRef = doc(db, collectionName, documentId);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) {
    console.log('Document data:', documentSnapshot.data());
    return documentSnapshot.data();
  } else {
    console.log('No such document');
    return null;
  }
}
//  const d = getDocument("users", "123");
//  console.log(d);

//получить все документы в коллекции
async function getAllDocuments<T>(collection_name: string) {
  const result: T[] = [];
  const collectionRef = collection(db, collection_name);
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    result.push(doc.data() as T);
  });
  console.log("show getAllDocuments('users')", result);

  return result;
}
getAllDocuments('users');
//console.log("show getAllDocuments('users')", getAllDocuments('users'));

//delete User by ID
//await deleteDoc(getUsers());
const deleteUserByID = (uid: string) => {
  const docRef = doc(db, 'users', uid);
  deleteDoc(docRef).then(() => {
    console.log('delete ok!');
  });
};
//deleteUserByID('5');     // delete ok!



//в массив получить все ID документов коллекции

interface Id {
  id: string;
}
export async function getUIDs<T>(collection_name: string) {
  // const result: doc.data.Id[] = [];
  const collectionRef = collection(db, collection_name);
  const querySnapshot = await getDocs(collectionRef);
  // const result: doc.data.Id[] = [];
  const result: Id[] = [];

  querySnapshot.forEach((doc) => {
    result.push(doc.data.id as Id);
  });
  console.log('show ALL UIDs', result);

  return result;
}


//getUIDs('study2');

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

// пример с использованием поля объекта user
export async function deleteUser(user: any) {
  try {
    const userRef = doc(collectionRef, user.id);
    await deleteDoc(userRef);
  } catch (error) {
    console.error(error);
  }
}
