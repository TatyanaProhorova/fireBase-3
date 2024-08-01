import { ChangeEvent, FormEvent, useState } from 'react';
import './Authorisation.scss';
import { Button, TextField } from '@mui/material';
import { createUserAutoID } from '../../api/addUserAutoID';

export const Authorisation = () => {
 const [fields, setFields] = useState({
  phone: '',
  password: ''
 })
  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentField)=>{
      return{
        ...currentField,
        [event.target.id]: event.target.value
      }
    });
  }
console.log(fields);
  const sendForm = (event: FormEvent)=> {
    event.preventDefault();
    createUserAutoID(fields);
  }
  return (
    <>
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Войти в систему</p>
          <form className="form_auth_style" onSubmit={sendForm} method="post">
            <TextField  onChange={changeFields} value={fields.phone} required id="phone" label="Номер телефона" />
            <TextField onChange={changeFields} value={fields.password} required type="password" id="password" label="Пароль" />
            <Button type="submit" variant="contained">
              ВОЙТИ В СИСТЕМУ
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
