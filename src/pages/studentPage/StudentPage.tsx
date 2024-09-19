import styles from './StudentPage.module.scss';

import { useParams } from 'react-router-dom';

import { getDocument } from '../../api/getByID';

import { Student } from '../../types';

import { useState, useEffect } from 'react';


export const StudentPage = () => {
    const [studentData, setStudentData] = useState<Student | null>(null);
    
    const [isLoading, setIsLoading] = useState(false);

    const{ studentid } = useParams();
    
    useEffect( () => {
        if (studentid) {
          setIsLoading(true);
          getDocument("users", studentid)
          .then((result)=>{setStudentData(result)})
          .finally(()=>{setIsLoading(false)})
        }
    }, [])
    //TODO: вопрос про ветку ниже  ???
    if (!studentid) {
        return (
           <div>
              Такого студента нет
           </div> 
        )
    }
    if (isLoading) {
        return (
           <div>
              Загрузка
           </div> 
        )
    }
    if (!studentData) {
        return (
           <div>
              Данные о студенте отсутствуют
           </div> 
        )
    }
const {surname, name, form} = studentData
    return(
        
        <>
            <div>
                student
            </div>
            <div>
                student
            </div>

            <div>
                <span className='studentName&Form'>`&{surname}  &{form}`</span>
            </div>

            <div>
                { studentid }
            </div>
        </>
    )
}
