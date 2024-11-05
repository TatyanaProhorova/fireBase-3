import { ChangeEvent, FormEvent, useState } from 'react';
import { loginUser, signUpUser } from '../../api/authorize';
import { Button, TextField } from '@mui/material';
//import { useAuth } from "../../contexts/authContext/AuthContext";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext';
import { confirmPasswordReset } from '@firebase/auth';


const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false);// 
  const [fields, setFields] = useState({
    email: '', 
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');  // пароли нае совпадают


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      if (fields.confirmPassword == fields.password) {
        setIsRegistering(true); 
        signUpUser(fields.email, fields.password)
        .then(() => {
          navigate('/login');
        }
        )
        .catch(() => {
          setErrorMessage("Ошибка сервера")
        })
        .finally(() => {
        setIsRegistering(false); 
        });
      } else {
        setErrorMessage('Пароли не совпадают'); // в set...  м передавться переменные-константы, (функции-редко)
      }
    }
  };

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setFields((currentField) => {
      console.log('currentField', currentField);
      return {
        ...currentField,
        [event.target.id]: event.target.value
      };
    });
  };
//   console.log(fields);

//   // const CustomTextField = styled(TextField) ({
//   //   margin: "5px 0",//   background: "red"
//   // })


  return (
    <>
      {/* <div className={styles.form_auth_block}>
        <div className={styles.form_auth_block_content}>
          <p className={styles.form_auth_block_head_text}>Войти в систему</p>
          <form className={styles.form_auth_style} onSubmit={sendForm} method="post"> */}
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Создать аккаунт</p>
          <form className="form_auth_style" onSubmit={onSubmit} method="post">
            <TextField
              onChange={changeFields}
              value={fields.email}
              required
              type="email"
              id="email"
              label="Электронная почта"
            />
            <TextField
              onChange={changeFields}
              value={fields.password}
              required
              type="password"
              id="password"
              label="Пароль"
            />
            <TextField
              onChange={changeFields}
              value={fields.confirmPassword}
              required
              type="password"
              id="confirmPassword"
              label="Подтвердите пароль"
            />
            {errorMessage && <span>ошибка:{errorMessage}</span>}
            <button
              type="submit"
              disabled={isRegistering}
            >
              {isRegistering ? 'ИДЕТ РЕГИСТРАЦИЯ...' : 'ЗАРЕГИСТРИРУЙТЕСЬ'}
            </button>

            {/* <Button type="submit" variant="contained">
              ВОЙТИ В СИСТЕМУ
            </Button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
//
// const Register = () => {
//   const navigate = useNavigate();
//   const { userLoggedIn } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);// 
//   const [errorMessage, setErrorMessage] = useState('');  // пароли нае совпадают

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!isRegistering) {
//       if (confirmPassword == password) {
        
//         await signUpUser(email, password);
//         setIsRegistering(true); // 
//       } else {
//         setErrorMessage('Пароли не совпадают'); // в set...  м передавться переменные-константы, (функции-редко)
//       }
//     }
//   };

//   console.log(userLoggedIn);
//   return (
//     <>
//       {/* {!userLoggedIn && <Navigate to={'/home'} replace={true} />} */}

//       <main >
//           <div >
//               <h3 >Создать новый аккаунт</h3>
//           </div>
//           <form onSubmit={onSubmit}>
//             <div>
//               <label>Email</label>
//               <input
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//             </div>

//             <div>
//               <label >Пароль</label>
//               <input
//                 disabled={isRegistering}
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
              
//               />
//             </div>

//             <div>
//               <label>Подтвердите пароль</label>

//               <input
//                 disabled={isRegistering}
//                 type="password"
//                 autoComplete="off"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => {
//                   setConfirmPassword(e.target.value);
//                 }}
               
//               />
//             </div>

//             {errorMessage && <span>ошибка:{errorMessage}</span>}

//             <button
//               type="submit"
//               disabled={isRegistering}
//             >
//               {isRegistering ? 'Идет регистрация...' : 'Зарегистрируйтесь'}
//             </button>

//             <div >
//               Уже есть аккаунт? {'   '}
//               <Link to={"/login"} >
//                 Перейти в аккаунт 
//               </Link>
//             </div>
//           </form>
//       </main>
//     </>
//   );
// };

// export default Register;

// // Link to={'*'}  ????

// // >ошибка: