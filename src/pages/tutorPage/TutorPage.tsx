import styles from './TutorPage.module.scss';
import { GutterlessList } from './GutterlessList';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { StudentDataForm } from '../../shared/StudentDataForm';

export const TutorPage = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleClose =  () => {
    setIsModalVisible(false)
  }

  const addStudent = () => {
    setIsModalVisible(true);
  }

  const addStudentSuccess = () =>  {
    handleClose();
   // TODO: делать повторный запрос за списком учеников
  }

  // state, fetch...
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
        {/* TODO: уходит props с полученными с backend  students */}
          <GutterlessList />
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
