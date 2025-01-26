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
    setFields((prevState) => ({
      ...prevState,
      [themeCode]: counter
    }));
  };

  const navigate = useNavigate();

  const createNewTest = async (event: FormEvent) => {
    event.preventDefault();
    const fieldsNotNull = { ...fields };
    Object.keys(fieldsNotNull).forEach((i) => {
      if (fieldsNotNull[i] === '0') delete fieldsNotNull[i];
    }); // !!!! перед передачей параметрга fields - отфильтровать по count != "0"

    console.log('fieldsNotNull', fieldsNotNull);
    const response = await createTest(fieldsNotNull); // !!!! перед передачей параметра fields - отфильтровать по count != "0"
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
      <div>Выберите количество заданий по темам</div>
      <form onSubmit={createNewTest}>
        <ThemeGutterlessList themeList={themeList} fields={fields} changeCountFields={changeFields} />
        {Object.keys(fields).length !== 0 && (
          <div>
            <div className="grid_container">
              <div>тема:</div>
              <div>количество заданий: </div>
            </div>
            {Object.keys(fields).map((item, index) => {
              const theme = themeList.filter((value) => value.code === item)[0];
              return (
                fields[item] !== '0' && (
                  <div key={index} className="grid_container">
                    <div>{theme.name}</div>
                    <div>{fields[item]}</div>
                  </div>
                )
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
