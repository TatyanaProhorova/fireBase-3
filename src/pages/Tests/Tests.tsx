import { useEffect, useState } from 'react';
//import { StudentDataForm } from '../../shared/components/StudentDataForm/StudentDataForm';
import { TestType } from '../../shared/types/tests';
import { TestGutterlessList } from './TestGutterlessList';
import { Button } from '@mui/material';
import { CreateTestPayload } from '../../shared/types/tests';
import { getAllTests } from '../../api/tests';

export const Tests = () => {
  const [testList, setTestList] = useState<TestType[]>([]);

  const getApiData = async () => {
    const response = await getAllTests();
    setTestList(response);
  };

  useEffect(() => {
    getApiData().catch(() => {
      console.error('ошибка в getApiData');
    });
  }, []);

  return <TestGutterlessList testList={testList} />;
};

