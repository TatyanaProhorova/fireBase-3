import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getById } from '../../api/common';

// import styles from './StudentPage.module.scss';
import { Student } from '../../shared/types/user';

export const StudentPage = () => {
  const [studentData, setStudentData] = useState<Student | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { studentId } = useParams();

  useEffect(() => {
    if (studentId) {
      setIsLoading(true);
      getById('users', studentId)
        .then((result) => {
          setStudentData(result as Student);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  //TODO: вопрос про ветку ниже  ???  когда в нее попадаем
  if (!studentId) {
    return <div>Такого студента нет</div>;
  }
  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (!studentData) {
    return <div>Данные о студенте отсутствуют</div>;
  }
  const { surname, name, form } = studentData;

  return (
    <>
      <div>student</div>

      <div>
        <span className="studentName&Form">
          {name} {surname} {form} класс
        </span>
      </div>

      <div>id: {studentId}</div>
    </>
  );
};
