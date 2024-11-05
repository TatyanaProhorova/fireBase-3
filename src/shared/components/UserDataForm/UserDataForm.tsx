import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { createUserAutoID } from '../../../api/users.ts';
//import styles from './StudentDataForm.module.scss';
import { Roles, Student, Teacher } from '../../types/user.ts';
import './style.css';

type Props = {
  onSuccess: () => void;
};
type OmitUserId = Omit<Student, 'id'>|Omit<Teacher, 'id'>;

export const UserDataForm = (props: Props) => {
  const { onSuccess } = props;
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    role: Roles
  });

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentField) => {
      // console.log('currentField', currentField);
      return {
        ...currentField,
        [event.target.id]: event.target.value
      };
    });
  };

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    const userProfile: OmitUserId = {
      ...fields
    };
    createUserAutoID(studentProfile);
    // TODO: проверить, что ученик был создан успешно
    // для этого? при создании добавить функцию с возвратом по полям
    // наличия id =>(true)  ?
    onSuccess();
  };

  //className={styles.StudentDataForm}

  return (
    <FormControl>
      <form onSubmit={sendForm} method="post">
        <div>
          <FormLabel>Введите данные ученика </FormLabel>
        </div>
        <div>
          <TextField
            variant="filled"
            size="small"
            color="primary"
            onChange={changeFields}
            value={fields.name}
            required
            type="text"
            id="name"
            placeholder="Имя"
          />
        </div>
        <div>
          <TextField
            onChange={changeFields}
            value={fields.surname}
            required
            type="text"
            id="surname"
            placeholder="Фамилия"
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            onChange={changeFields}
            value={fields.email}
            required
            type="text"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            onChange={changeFields}
            value={fields.role}
            required
            type="text"
            id="role"
            placeholder="Роль"
          />
        </div>        
        <Button type="submit"> отправить </Button>
      </form>
    </FormControl>
  );
};
