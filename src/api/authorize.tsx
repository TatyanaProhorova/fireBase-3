import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fBStoreConstants";


export const loginUser = (email:string, password:string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(
    (response) => {
        localStorage.setItem("token", response.user.accessToken)
    }
  )  
}


