import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fBStoreConstants';
//                                                        nav: NavigateFunction
export const loginUser = (email: string, password: string, nav: any, redirectionOnSuccess: string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((response) => {
    localStorage.setItem('token', response.user.accessToken); // библиотечные функции м остаться без типа
  })
  .then(() => {
    nav(redirectionOnSuccess);
  });
};

export const signUpUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// import auth from "./firebase";

// const doSignInWithEmailAndPassword =  async(email, password) => {
//     return SignInWithEmailAndPassword(auth, email, password);
// };
