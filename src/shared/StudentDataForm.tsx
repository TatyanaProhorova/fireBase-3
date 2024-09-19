import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addUserAutoID } from '../api/addUserAutoID.tsx';
import { Roles, Student, Teacher } from '../types.ts';

    
export const StudentDataForm = (props) => {
  const {onSuccess} = props;
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    form: ''
  })

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentField)=>{
      console.log('currentField', currentField);
        return{
          ...currentField,
          [event.target.id]: event.target.value
          }
        });
      }

  const sendForm = (event: FormEvent, )=> {
    event.preventDefault();
    const studentProfile: Student = {
      role: Roles.Student,  
      ...fields
    }
    addUserAutoID(studentProfile);
    // TODO: проверить, что ученик был создан успешно
    // ? при создании добавить функцию - возврат по полям
    // наличия id (true)?
    onSuccess();
  }
  
  return(
    <FormControl>
      <form  onSubmit={sendForm} method="post">
        <FormLabel>Enter Name</FormLabel>

        <TextField onChange={changeFields} value={fields.name} required type="text" id='name'  placeholder="Имя" />
        <TextField onChange={changeFields} value={fields.surname} required type="text" id='surname' variant='outlined' placeholder="Фамилия" />
        <TextField onChange={changeFields} value={fields.form} required type="text" id='form' variant='outlined' placeholder="Класс" />

        <Button type="submit"> Submit </Button>
      </form>
</FormControl>
  )
}
