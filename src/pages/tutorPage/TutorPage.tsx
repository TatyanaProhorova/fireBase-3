import styles from './TutorPage.module.scss';
import { GutterlessList } from './GutterlessList';
import { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { StudentDataForm } from '../../shared/StudentDataForm';
import { Roles, Student } from '../../types';
import { getUsersByRole } from '../../api/getUsersByRole';
import { getUIDs } from '../../api/api';

export const TutorPage = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [studentList, setStudentList] = useState<Student[]>([]);

  const getApiData = async () => {

  const response = await getUsersByRole<Student>(Roles.Student);
  setStudentList(response);
  }  

  const handleClose =  () => {
    setIsModalVisible(false)
  }

  const addStudent = () => {
    setIsModalVisible(true);
  }

  const addStudentSuccess = () => {
    handleClose();
    try{getApiData();}
    catch{console.error("ошибка в getApiData");}
   // DONE: делать повторный запрос за списком учеников
  }

  useEffect(() => {getApiData()
    .catch(() => {console.error("ошибка в getApiData");})}, // 1!!
   []);
  
  return(
    <>  
    <div className={styles.general}>

      <div className={styles.studentListHeaderContainer}>
        <div className={styles.studentListHeader}>
          <header>Список учеников</header>  
        </div>
        <div className={styles.addingStudent}>
          <button onClick={addStudent} name="addingButton" >
            +
          </button>
        </div>
      </div>
        
      <div className={styles.studentListContainer}> 
      {/* DONE: уходит props с полученными с backend students */}
        <GutterlessList studentList={studentList} />
      </div>    

      <div>
        <ul>
        {studentList.map((value) => (
          <li key={value.surname}>{value.surname}</li>))}
        </ul>  
      </div>
    </div>
    
    <Modal
      open={isModalVisible}
      onClose={handleClose}

    >
      <StudentDataForm onSuccess={addStudentSuccess}/>
    </Modal>
    </>
  )
}
