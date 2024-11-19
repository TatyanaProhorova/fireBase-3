import { ChangeEvent, FormEvent, useState } from 'react';
import { createUserAutoID } from '../../api/users';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
//import { useAuth } from "../../contexts/authContext/AuthContext";
import { useAuth } from '../../contexts/authContext/AuthContext';
import { confirmPasswordReset } from '@firebase/auth';
import { Roles, Student, Teacher } from '../../shared/types/user';


type Fields = {
  role?: `${Roles}`,  // значение по ссылке
  surname: string,
  name: string,
  email: string
}

const Admin = () => {
  const [isRegistering, setIsRegistering] = useState(false); //
  const [fields, setFields] = useState<Fields>({
    role: undefined,  // выбор роли - выпадпющееп меню
    surname: '',
    name: '',
    email: ''
  });
  // const [errorMessage, setErrorMessage] = useState(''); // Ошибка сервера

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    //export const createUserAutoID = async (profile: object) => {
    createUserAutoID({role: fields.role,
                    surname: fields.surname,
                    name: fields.name,
                    email: fields.email
                    })
     .then(() => {
      console.log('Добавили пользователя ')
    })
      // .catch(() => {
      //   setErrorMessage('Ошибка сервера');
      // })
    .finally(() => {
      setIsRegistering(false);
    });
  }
  

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    // setErrorMessage('');
    setFields((currentField) => {
      console.log('currentField', currentField);
      return {
        ...currentField,
        [event.target.id]: event.target.value
      };
    });
  };

  const changeSelect = (event: SelectChangeEvent) => {
    // setErrorMessage('');
    setFields((currentField) => {
      console.log('currentField', currentField);
      return {
        ...currentField,
        role: event.target.value as `${Roles}`
      };
    });
  };

  return (
    <>
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Добавить пользователя</p>
          <form className="form_auth_style" onSubmit={onSubmit} method="post">
            <TextField
              onChange={changeFields}
              value={fields.role}
              required
              // type="radio"
              id="role"
              label="Роль"
            />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Роль</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fields.role}
            label="Роль"
            onChange={changeSelect}
          >
            <MenuItem value={Roles.Student}>студент</MenuItem>
            <MenuItem value={Roles.Teacher}>учитель</MenuItem>
          </Select>
        </FormControl>

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
              value={fields.surname}
              required

              id="surname"
              label="Фамилия"
            />

            <TextField
              onChange={changeFields}
              value={fields.name}
              required

              id="name"
              label="Имя"
            />


            {/* {errorMessage && <span>ошибка:{errorMessage}</span>} */}
            <button type="submit" disabled={isRegistering}>
              {isRegistering ? 'ДОБАВЛЯЕМ ПОЛЬЗОВАТЕЛЯ...' : 'ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ'}
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

export default Admin;
