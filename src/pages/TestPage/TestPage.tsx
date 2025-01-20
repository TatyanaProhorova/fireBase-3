import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TasksList } from '../../shared/widgets/TasksList/TasksList';


export default function TestPage() {
  const { testID }= useParams();

  return (
  <>
    <span>На этой странице должен быть ТЕСТ</span>;
    <div>
      
      <TasksList />
    </div>
  </>  
  
)
}



