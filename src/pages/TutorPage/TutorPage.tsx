import styles from './TutorPage.module.scss';
import { GutterlessList } from './GutterlessList';
import { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { StudentDataForm } from '../../shared/components/StudentDataForm/StudentDataForm';
import { Roles, Student } from '../../shared/types/user';
import { getUsersByRole } from '../../api/users';

export const TutorPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [studentList, setStudentList] = useState<Student[]>([]); //

  const getApiData = async () => {
    const response = await getUsersByRole<Student>(Roles.Student);
    setStudentList(response);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const addStudent = () => {
    setIsModalVisible(true);
  };

  const addStudentSuccess = () => {
    handleClose();
    try {
      getApiData();
    } catch {
      console.error('ошибка в getApiData');
    }
    // DONE: делать повторный запрос за списком учеников
  };

  useEffect(
    () => {
      getApiData().catch(() => {
        console.error('ошибка в getApiData');
      });
    }, // 1!!
    []
  );

  return (
    <>
      <div className={styles.general}>
        <div className={styles.studentListContainer}>
          <div className={styles.studentListHeaderContainer}>
            <div className={styles.studentListHeader}>
              <header className={styles.listHeader}>Список учеников</header>
            </div>
            <div className={styles.addingStudent}>
              <button onClick={addStudent} name="addingButton">
                +
              </button>
            </div>
          </div>

          {/* DONE: уходит props с полученными с backend students */}
          <GutterlessList studentList={studentList} />
        </div>

        <Modal open={isModalVisible} onClose={handleClose}>
          <StudentDataForm onSuccess={addStudentSuccess} />
        </Modal>
      </div>
    </>
  );
};
