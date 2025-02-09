import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TasksList } from '../../shared/widgets/TasksList/TasksList';
import { Tests } from '../Tests/Tests';
import { getById } from '../../api/common';
import { Task } from '../../shared/types/task';
import { TestType } from '../../shared/types/tests';
import { CircularProgress } from '@mui/material';

export default function TestPage() {

console.log('HERE');

  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { testID } = useParams();

  const getTestById = async (testID: string | undefined) => {
    let result: Task[] = [];
  
    if (testID) {
      setIsLoading(true);
      const testData = await getById<TestType>("tests", testID); // получаем данные теста
      if (testData && testData.testContent) {
        // используем Promise.all для ожидания всех асинхронных операций
        const tasks = await Promise.all(
          testData.testContent.map(async (id: string) => {
            const task = await getById<Task>("tasks", id); 
            return task;

          })
        );
  
        result = tasks.filter((i) => i !== null);
        setIsLoading(false);
      }
    } else {
      console.log("testID не найден");
    }
  console.log(result);
    return result; 
  };
  


  // const getTestById = async (testID: string | undefined) => {
  //   const result: Task[] = [];

  //   if (testID) {
  //     await getById<TestType>('tests', testID)
  //       // тип r???  r["testContent"] - массив [id: string] заданий (tasks)
  //       // @ts-ignore
  //       .then((r) => {
  //         r &&
  //           r['testContent'].forEach(async (id) => {
  //             await getById('tasks', id).then((task) => {
  //               console.log(task);
  //               result.push(task as Task);
  //             });
  //           });
  //       });
  //   } else {
  //     console.log('testID не определен');
  //   }
  //   return result;
  // };

  useEffect(() => {
    getTestById(testID).then(setTaskList);
  }, [testID]);

  return (
    
    <>
      <span>На этой странице должен быть ТЕСТ</span>;
      {/* {isLoading ? <CircularProgress /> : */}
      
        <TasksList list={taskList} />

      {/* } */}
    </>
  );
}
