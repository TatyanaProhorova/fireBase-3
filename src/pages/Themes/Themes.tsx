
//import styles from './TutorPage.module.scss';

import { useEffect, useState } from 'react';
//import { StudentDataForm } from '../../shared/components/StudentDataForm/StudentDataForm';
import { getAllThemes } from '../../api/themes';
import { ThemeType } from '../../shared/types/themes';
import { ThemeGutterlessList } from './ThemeGutterlessList';
import { Button } from '@mui/material';
import { CreateTestPayload } from '../../shared/types/tests';


export const Themes = () => {
    const [themeList, setThemeList] = useState<ThemeType[]>([]);
    
    const [fields, setFields] = useState<CreateTestPayload>({});
    
    const getApiData = async () => {
        const response = await getAllThemes();
        setThemeList(response);
    };
  
    // const changeFields = (themeCode: string, counter: number) => {
    //   const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    //     setFields((currentField) => {
    //       console.log('currentField', currentField);
    //       return {
    //         ...currentField,
    //         [event.target.id]: event.target.value
    //       };
    //     })}};

    

    const createTest = () => {
      //TODO: сделать
    };

  useEffect(
    () => {
      getApiData().catch(() => {
        console.error('ошибка в getApiData');
      });
    }, []
  );
    
return(
    <>
      <form onSubmit={createTest}>
        <ThemeGutterlessList themeList={themeList} fields={fields} />
        {/* <Button type="submit" variant="contained">
             Создать вариант
        </Button> */}
      </form>         
    </>
  )
}
