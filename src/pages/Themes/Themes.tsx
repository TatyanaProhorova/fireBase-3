import { FormEvent, useEffect, useState } from 'react';
import { getAllThemes } from '../../api/themes';
import { ThemeType } from '../../shared/types/themes';
import { ThemeGutterlessList } from './ThemeGutterlessList';
import { Button } from '@mui/material';
import { CreateTestPayload } from '../../shared/types/tests';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../../api/tests';
import './style.css';

export const Themes = () => {
  const [themeList, setThemeList] = useState<ThemeType[]>([]);

  const [fields, setFields] = useState<CreateTestPayload>({});

  const getApiData = async () => {
    const response = await getAllThemes();
    setThemeList(response);
  };

  const changeFields = (themeCode: string, counter: string) => {
    // if (counter === '4') {
    //   setFields((prevState) => {  
    //     delete prevState[themeCode];
    //     return prevState;
    //   });
    //   return;
    // } else {
      setFields((prevState) => ({
      ...prevState,
      [themeCode]: counter // для ключа - параметра?
      }));
    } 
  // };

  const navigate = useNavigate();

  const createNewTest = async (event: FormEvent) => {
    event.preventDefault();
    const response = await createTest(fields);

    if (response) {
      navigate(`/tests/${response}`); // id теста
    }
  };

  useEffect(() => {
    getApiData().catch(() => {
      console.error('ошибка в getApiData');
    });
  }, []);

  console.log('fields', fields);
  return (
    <>
    
      <form onSubmit={createNewTest}>
        <ThemeGutterlessList themeList={themeList}
                             fields={fields} 
                             changeCountFields={changeFields} />
        {Object.keys(fields).length && (
          <div>
            <div className="grid_container">
              <div>тема:</div>
              <div>количество заданий: </div>
            </div>
            {Object.keys(fields).map((key) => {
              const theme = themeList.filter((value) => value.code === key)[0];
              return (
                <div className="grid_container">
                  <div>{theme.name}</div>
                  <div>{fields[key]}</div>
                </div>
              );
            })}
          </div>
        )}

        <Button type="submit" variant="contained">
          Создать вариант
        </Button>
      </form>
    </>
  );
};
