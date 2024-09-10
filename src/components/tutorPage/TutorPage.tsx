import styles from './TutorPage.module.scss';

import { GutterlessList } from './GutterlessList';


export const TutorPage = () => {
  const addStudent = () => {
    
  }
  return(
    <>  
    <div className={styles.general}>
      <div>
        <div className={styles.studentListHeader}>
          <header>Список учеников</header>  
        </div>
        <div className={styles.studentListContainer}>         
          <GutterlessList />
        </div>
        <div>
          <button onClick={addStudent} name="addingButton" className={styles.addingStudent}>
            +
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
