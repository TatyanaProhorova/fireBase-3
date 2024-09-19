import styles from './StudentPage.module.scss';

import { useParams } from 'react-router-dom';

import { getDocument } from '../../api/getByID';

import { Student } from '../../types';

import { useState, useEffect } from 'react';


export const StudentPage = () => {
    const [studentData, setStudentData] = useState<Student | null>(null);
    
    const [isLoading, setIsLoading] = useState(false);
// TODO: вместо studentid должно быть поле с ?? ФИ + класс
    const{ studentid } = useParams();
    
    useEffect( () => {
        if (studentid) {
          setIsLoading(true);
          getDocument("users", studentid)
          .then((result)=>{setStudentData(result)})
          .finally(()=>{setIsLoading(false)})
        }
    }, [])
    //TODO: вопрос про ветку ниже  ???  когда в нее попадаем?
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
            <div>student</div> <div>student</div>
            
            <div>
                <span className='studentName&Form'>`&{name}  &{surname}  &{form}`</span>
            </div>

            <div>
                { studentid }
            </div>
        </>
    )
}
