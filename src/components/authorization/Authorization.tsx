import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Authorization.module.scss';
import { Button, TextField, styled } from '@mui/material';
import { createUserAutoID } from '../../api/addUserAutoID';
import { loginUser } from '../../api/authorize';

export const Authorization = () => {
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

const CustomTextField = styled(TextField) ({
  margin: "5px 0",
  background: "red"
})
  const sendForm = (event: FormEvent)=> {
    event.preventDefault();
    loginUser(fields.phone, fields.password);
    
  }
  return (
    <>
      <div className={styles.form_auth_block}>
        <div className={styles.form_auth_block_content}>
          <p className={styles.form_auth_block_head_text}>Войти в систему</p>
          <form className={styles.form_auth_style} onSubmit={sendForm} method="post">
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
