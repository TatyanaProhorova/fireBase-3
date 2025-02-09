import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { TestType } from '../../shared/types/tests';

type Props = {
  testList: TestType[];
};

export const TestGutterlessList = (props: Props) => {
  const { testList } = props;
  const navigate = useNavigate();
  const goToTest = (id: string) => {
    navigate(`/tests/${id}`);
  };

  console.log('testList', testList);
  return (
    <List sx={{ width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper' }}>
      {testList.map((value) => (
        <ListItem
          onClick={() => goToTest(value.id)}
          key={value.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${value.id} ${value.name}`} />
        </ListItem>
      ))}
    </List>
  );
};
