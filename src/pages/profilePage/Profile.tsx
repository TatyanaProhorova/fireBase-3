import { useParams } from 'react-router-dom';
import { getUserByEmail } from '../../api/users';
import { useEffect, useState } from 'react';
import { Student, Teacher } from '../../shared/types/user';
import { getTasks } from '../../api/tasks';
import { Task } from '../../shared/types/task';
import Multi from '../../shared/components/Multi/Multi';
import { Button } from '@mui/material';
import { TasksList } from '../../shared/widgets/TasksList/TasksList';

// profile/pus@sup.ru

// аутентифицированный пользоавтель
// email "pus@sup.ru" (string)
// name "Нина" (string)
// role "student" (string)
// surname "Мамонова" (string)
// пароль "pus123SUP"

export const Profile = () => {
  const [userData, setUserData] = useState<Student | Teacher | null>(null);
  const { email } = useParams();

  //  TODO: сделать обновление задания не только по загрузке

  useEffect(() => {
    if (!email) {
      return;
    }
    getUserByEmail(email).then(console.log);
    // getUserByEmail(email).then(setUserData);   !!!!!!!!
  }, []);

  return (
    <>
      <div>ЗДРАВСТВУЙТЕ, ваша электронная почта {email}</div>
      <div>У Вас новое задание по биологии</div>
      <br />
      <br />
      {/* <TasksList  /> */}
    </>
  );
};
