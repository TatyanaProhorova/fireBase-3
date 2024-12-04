import { ChangeEvent, FormEvent, useState } from 'react';
import { signUpUser } from '../../api/authorize';
import { Button, TextField } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { confirmPasswordReset } from '@firebase/auth'; // изменить пароль

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false); //
  const [fields, setFields] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // пароли нае совпадают

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      if (fields.confirmPassword == fields.password) {
        setIsRegistering(true);
        signUpUser(fields.email, fields.password)
          .then(() => {
            navigate('/login');
          })
          .catch(() => {
            setErrorMessage('Ошибка сервера');
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

  return (
    <>
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
            <button type="submit" disabled={isRegistering}>
              {isRegistering ? 'ИДЕТ РЕГИСТРАЦИЯ...' : 'ЗАРЕГИСТРИРУЙТЕСЬ'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
