import { useEffect, useState } from 'react';
import { Task, TypeTask } from '../../types/task';
import { getTasks, getTasksByType } from '../../../api/tasks';
import Multi from '../../components/Multi/Multi';
import { Button } from '@mui/material';
import Single from '../../components/Single/Single';
import { TextTask } from '../../components/TextTask/TextTask';

interface Props {
  list: Task[]
}

export function TasksList(props: Props) {
//  const [taskList, setTaskList] = useState<Task[]>([]);
  // console.log("taskList", taskList);
  // useEffect(() => {
  //   getTasks().then(setTaskList);
  // }, []);
  const {list} = props;
  console.log('list', list);
  function renderList() {
    return list.map((item, index) => {
      switch (item.type) {
        case TypeTask.Multi:
          return <Multi key={index} description={item.description} options={item.options} />;

        case TypeTask.Single:
          return <Single key={index} description={item.description} options={item.options} />;

        case TypeTask.TextTask:
          return <TextTask key={index} description={item.description} />;

        default:
          return <span key={index}>Тип задания не поддерживается</span>;
      }
    });
  }
// на страницу - всех заданий
  // const updateTasks = () => {
  //   getTasks().then(setTaskList);
  // };

  // const getSingleTasks = () => {
  //   getTasksByType<Task>(TypeTask.Single).then(setTaskList);
  // };

  // const getMultiTasks = () => {
  //   getTasksByType<Task>(TypeTask.Multi).then(setTaskList);
  // };
  return (
    <>
      {/* <Button onClick={updateTasks} variant="contained">
        обновить задания
      </Button>
      <Button onClick={getSingleTasks} variant="contained">
        отобразить задания с одним правильным вариантом ответа
      </Button>
      <Button onClick={getMultiTasks} variant="contained">
        отобразить задания с несколькими правильными вариантами ответов
      </Button> */}
      {renderList()}
    </>
  );
}
