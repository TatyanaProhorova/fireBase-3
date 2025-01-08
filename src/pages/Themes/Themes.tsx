import { FormEvent, useEffect, useState } from 'react';
import { getAllThemes } from '../../api/themes';
import { ThemeType } from '../../shared/types/themes';
import { ThemeGutterlessList } from './ThemeGutterlessList';
import { Button } from '@mui/material';
import { CreateTestPayload } from '../../shared/types/tests';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../../api/tests';
//import * as Datetime from "react-datetime";

export const Themes = () => {
  const [themeList, setThemeList] = useState<ThemeType[]>([]);

  const [fields, setFields] = useState<CreateTestPayload>({});



  const getApiData = async () => {
    const response = await getAllThemes();
    setThemeList(response);
  };

  const changeFields = (themeCode: string, counter: string) => {
    if (counter === "0") {
      setFields((prevState) => {
        delete prevState[themeCode];
        return prevState
      });
      return;
      }
    setFields((prevState) => ({
      ...prevState,
      [themeCode]: counter // для ключа - значения (функции??) - параметра?
    }));
  };

  // const goToTest = (testTime: string) => {
  //   /tests/:testTime
  //   navigate(`/themes/${testTime}`);
  // };

  // import * as Datetime from "react-datetime";
//   As for the names, you decide what the name will be, it
//  can be ReactDatetime if you want:
// import * as ReactDatetime from "react-datetime";



const navigate = useNavigate();

const createNewTest = async(event: FormEvent) => {
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
        <ThemeGutterlessList themeList={themeList} fields={fields} changeCountFields={changeFields} />
        {
          Object.keys(fields).length && (
          <div>
            {Object.keys(fields).map((key)=>{            
                const theme = themeList.filter((value)=>
                  (value.code===key))[0];
                return(
                  <div>
                    <span>тема: {theme.name}</span>
                    <span>количество заданий:  {fields[key]}</span>
                  </div>
                )
              })          
            }
          </div>
          )
        }
            
        <Button type="submit" variant="contained">
          Создать вариант
        </Button>
      </form>
    </>
  );
};
