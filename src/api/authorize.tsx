import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fBStoreConstants';
import { NavigateFunction } from 'react-router-dom';

export const loginUser = async (
  email: string,
  password: string
  // nav: NavigateFunction,
  // redirectionOnSuccess: string
) => {
  let isSuccessResponse = false;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response.user) {
      localStorage.setItem('token', response.user.accessToken);
      isSuccessResponse = true;
    }
  } catch (error) {
    console.error(error); // console.log(error)--> console.error(error)
  }

  return isSuccessResponse;
};

export const signUpUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};


