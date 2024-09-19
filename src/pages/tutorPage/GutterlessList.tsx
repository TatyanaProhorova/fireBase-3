import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// https://mui.com/material-ui/react-list/
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';


export const GutterlessList = () => {
   // TODO: В компoНент прихходит массив students пррорпсом
   const navigate = useNavigate();
   const goToStudent = (id: number) => {
   navigate(`/student/${id}`);  // динамическая строка
   }
    return (

      //TODO: map по stydents
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[11, 23, 33, 55, 6].map((value) => (

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
  