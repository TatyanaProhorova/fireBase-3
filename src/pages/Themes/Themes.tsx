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

  const changeFields = (themeCode: string, counter: string) => {    // number instead of string
    setFields((prevState)=>({
      ...prevState,
      [themeCode]: counter,  // для ключа - значения функции
    }))
  }
 
    
  const createTest = () => {
    //TODO: сделать
  };

  useEffect(() => {
    getApiData().catch(() => {
      console.error('ошибка в getApiData');
    });
  }, []);

  console.log("fields", fields);

  return (
    <>
      <form onSubmit={createTest}>
        <ThemeGutterlessList themeList={themeList} 
                             fields={fields} 
                             changeCountFields={changeFields}
        />
        <Button type="submit" variant="contained">
             Создать вариант
        </Button>
      </form>
    </>
  );
};
