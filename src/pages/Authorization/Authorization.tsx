import { ChangeEvent, FormEvent, useState } from 'react';
//import styles from './Authorization.module.scss';
import { Button, TextField } from '@mui/material';
import { loginUser } from '../../api/authorize';
import './authorisationStyle.css';
import { useNavigate } from 'react-router-dom';

// // !!
// // // Cross origin redirect sign-in is no longer supported in many browsers. Update your app to ensure your users can continue to sign into your app.
// // !!
// !!

// to use Autt module autentication with Firebase
// vizit https://firebaseopensource.com/projects/firebase/quickstart-android/auth/readme/

// Email/Password Setup
// Go to the Firebase Console and navigate to your project:
// Select the Auth panel and then click the Sign In Method tab.
// Click Email/Password and turn on the Enable switch, then click Save.
// Under Authorized Domains click Add Domain and add auth.example.com.
// Run the app on your device or emulator.
// Select EmailPasswordActivity from the main screen.
// Fill in your desired email and password and click Create Account to begin.

// есть пользователь с pus@sup.ru и паролем pus123SUP

export const Authorization = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [fields, setFields] = useState({
    email: '',
    password: ''
  });
  const nav = useNavigate();
  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentField) => {
      console.log('currentField', currentField);
      return {
        ...currentField,
        [event.target.id]: event.target.value
      };
    });
  };

  // const CustomTextField = styled(TextField) ({
  //   margin: "5px 0",//   background: "red"
  // })

  const sendForm = async (event: FormEvent) => {
    event.preventDefault();
    const isSuccessResponse = await loginUser(fields.email, fields.password);
    if (isSuccessResponse) {
      nav(`/profile/${fields.email}`);
    } else {
      setErrorMessage('Ошибка авторизации');
    }
  };

  return (
    <>
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Войти в систему</p>
          <form className="form_auth_style" onSubmit={sendForm} method="post">
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

            <span style={{ color: 'red' }}>{errorMessage}</span>

            <Button type="submit" variant="contained">
              ВОЙТИ В СИСТЕМУ
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
