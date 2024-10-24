import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { createUserAutoID } from '../../../api/users';
//import styles from './StudentDataForm.module.scss';
import { Roles, Student } from '../../types/user.ts';
import './style.css';

type Props = {
  onSuccess: () => void;
};
type OmitStudentId = Omit<Student, 'id'>;

export const StudentDataForm = (props: Props) => {
  const { onSuccess } = props;
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    form: ''
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
    const studentProfile: OmitStudentId = {
      role: Roles.Student,
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
            value={fields.form}
            required
            type="text"
            id="form"
            placeholder="Класс"
          />
        </div>
        <Button type="submit"> отправить </Button>
      </form>
    </FormControl>
  );
};
