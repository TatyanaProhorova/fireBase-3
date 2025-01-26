import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TasksList } from '../../shared/widgets/TasksList/TasksList';
import { Tests } from '../Tests/Tests';
import { getById } from '../../api/common';
import { Task } from '../../shared/types/task';
import { TestType } from '../../shared/types/tests';

export default function TestPage() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { testID } = useParams();


  const getTestById = async (testID: string | undefined) => {
    const result: Task[] = [];

    if (testID) {
      await getById<TestType>("tests", testID)
    // тип r???  r["testContent"] - массив [id: string] заданий (tasks)     
    // @ts-ignore 
        .then((r) => {   
          r && r["testContent"].forEach(async(id) => { 
            await getById("tasks", id)
            .then((task) => {
              console.log(task);
              result.push(task as Task);
            })
          })
        })
    } else {
      console.log("testID не определен");
    };
    return result;
  } 
  
  useEffect(() => {
    getTestById(testID).then(setTaskList);
  },
  [testID]);


  return (
    <>
      <span>На этой странице должен быть ТЕСТ</span>;
      <div>
        <TasksList list={taskList}  />
      </div>
    </>
  );
}
