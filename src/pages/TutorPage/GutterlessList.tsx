import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// https://mui.com/material-ui/react-list/
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Student } from '../../shared/types/user';

type Props = {
  studentList: Student[];
};

export const GutterlessList = (props: Props) => {
  const { studentList } = props;
  // TODO: должен приходить props - массив студентов: []values
  const navigate = useNavigate();
  const goToStudent = (id: string) => {
    // id: number  ->  surname: string
    //navigate(`/student/${id}`);  // динамическая строка
    navigate(`/student/${id}`);
  };

  console.log('studentList', studentList);
  return (
    // <ul>
    // {studentList.map((value) => (
    //   <li key={value.surname}> {value.surname}</li>))}
    // </ul>
    //TODO: map по stydents
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {studentList.map((value) => (
        <ListItem
          onClick={() => goToStudent(value.id)}
          key={value.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${value.surname} ${value.name}`} />
        </ListItem>
      ))}
    </List>
  );
};
