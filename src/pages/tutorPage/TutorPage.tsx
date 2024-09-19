import styles from './TutorPage.module.scss';
import { GutterlessList } from './GutterlessList';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { StudentDataForm } from '../../shared/StudentDataForm';
import { getUsers } from '../../api/getUsers';
import { Student } from '../../types';

export const TutorPage = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [studentList, setStudentList] = useState<Student[]>([]);

  const getApiData = async () => {
  const response = await getUsers();
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
    getApiData();
   // ^^^ TODO: делать повторный запрос за списком учеников
  }

  return(
    <>  
    <div className={styles.general}>
      <div>

        <div className={styles.studentListHeader}>
          <header>Список учеников</header>  
        </div>
        <div className={styles.addingStudent}>
          <button onClick={addStudent} name="addingButton" >
            +
          </button>
        </div>
        
        <div className={styles.studentListContainer}> 
        {/* TODO: уходит props с полученными с backend students */}
          <GutterlessList studentList={studentList} />
        </div>    

        <div>
          <ul>
          {studentList.map((value) => (
            <li key={value.surname}>{value.surname}</li>))}

          </ul>  
         </div>
          
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
