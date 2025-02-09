// import { TextField } from '@mui/material';
import { Task } from '../../types/task';
import { Textarea } from '@mui/joy';
import './textTaskStyle.css';
import { TextField } from '@mui/material';

type Props = Pick<Task, 'description'>;

export function TextTask({ description }: Props) {
  return (
    <>
      {/* <TextField
  label={description}  
  placeholder="MultiLine with minRows: 3 and "
  multiline
  minRows={3}
  maxRows={Infinity}
/>  */}

      <div className="textTask" id="22">
        <div className="textTaskDescription">{description}</div>

        <Textarea aria-label="minimum height" minRows={3} placeholder="Введите развернутый ответ…" />
      </div>
    </>
  );
}
