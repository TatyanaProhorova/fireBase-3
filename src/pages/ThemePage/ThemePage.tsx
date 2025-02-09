import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeType } from '../../shared/types/themes';
import { getThemeByCode } from '../../api/themes';

export const ThemePage = () => {
  const [themeData, setThemeData] = useState<ThemeType | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { themeCode } = useParams();

  useEffect(() => {
    if (themeCode) {
      setIsLoading(true);
      getThemeByCode(themeCode)
        .then((result) => {
          setThemeData(result);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  //TODO: вопрос про ветку ниже  ???  когда в нее попадаем
  //if (!studentId) {
  //return <div>Такого студента нет</div>;
  //}
  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (!themeData) {
    return <div>Данные о теме отсутствуют</div>;
  }
  const { name, code } = themeData;

  return (
    <>
      <div>
        <span className="studentName&Form">
          {code} {name}
        </span>
      </div>
    </>
  );
};
