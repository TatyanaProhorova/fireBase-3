import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';


export const GutterlessList = () => {

   const navigate = useNavigate();
   const goToStudent = (id: number) => {
   navigate(`/student/${id}`);  // динамическая строка
   }
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[11, 23, 33, 55, 6].map((value) => (
          // сделать передачу id на сервер и чтение в функцию  перехода на страницу студента ? или просто
          // пользоваться map списка, как это сделано?
          <ListItem
            onClick={() => goToStudent(value)}
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    );
  }
  