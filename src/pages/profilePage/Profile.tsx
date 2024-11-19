import { useParams } from "react-router-dom";
import { getUserByEmail } from "../../api/users";
import { useEffect, useState } from "react";
import { Student, Teacher } from "../../shared/types/user";

// аутентифицированный пользоавтель
// email "pus@sup.ru" (string)
// name "Нина" (string)
// role "student" (string)
// surname "Мамонова" (string)
// пароль "pus123SUP"

export const Profile = () => {
  const [userData, setUserData] = useState<Student | Teacher | null>(null);

  const { email } = useParams();


  if (!email) {
    console.log('FALSE');
  } else {

  useEffect(() => { 
    getUserByEmail(email)
    .then((result) => console.log(result))         
  }, []);

 
  return (
    <>
      <div>ЗДРАВСТВУЙТЕ, ваша электронная почта {email}</div>
      <div>У Вас новое задание по биологии</div>
    </>
  ); }
}

