import { useEffect, useState } from "react";
import { Task } from "../../types/task";
import { getTasks } from "../../../api/tasks";
import Multi from "../../components/Multi/Multi";
import { Button } from "@mui/material";


export function TasksList() {
    const [taskList, setTaskList] = useState<Task[]>([]);

   
      useEffect(() => {
        getTasks().then(setTaskList);
      }, []);
    function renderList() {
    return taskList.map((item, index) => {  
        return (item.type!=="multi")
        ? 
        <span key={index}>Тип задания не поддерживается</span>
        :<Multi  description={item.description} options={item.options} />      
    }) 
    }
    const updateTasks = () => {
        getTasks().then(setTaskList);
      }
      
      
    return (
        <>
        <Button onClick={updateTasks} variant="contained">обновить задания</Button>
            {renderList()}
        </>
    ); 
}

