import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// https://mui.com/material-ui/react-list/
import ListItemText from '@mui/material/ListItemText';
// import CommentIcon from '@mui/icons-material/Comment';
// import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { ThemeType } from '../../shared/types/themes';
import NumberInput from '../../shared/widgets/NumberInput/NumberInput';
import './style.css';
import { CreateTestPayload } from '../../shared/types/tests';
import { ChangeEvent, useState } from 'react';
import QuantityInput from '../../shared/widgets/NumberInput/NumberInput';
// import QuantityInput


type Props = {
  themeList: ThemeType[];
  fields: CreateTestPayload;
};

export const ThemeGutterlessList = (props: Props) => {
  const { themeList } = props;
  const navigate = useNavigate();
  const goToTheme = (code: string) => {
    navigate(`/themes/${code}`);
  };
  
  const [fields, setFields] = useState({
    code: '',
    count: 0
  });
//TODO: Изменить иконку перехода на страницу темы
const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
  setFields((currentField) => {
    console.log('currentField', currentField);
    return {
      ...currentField,
      [event.target.id]: event.target.value
    };
  });
};

//const [value, setValue] = useState<number | null>(null);
  console.log('themeList', themeList);
  const [value, setValue] = useState<number | null>(null);
  
  return (
    <>
      {/* <div className="tableHeaders"> 
        <span>
          Темы
        </span>
        <span>
          Число заданий по теме
        </span>
      </div> */}

      <List sx={{ width: '100%',
          maxWidth: 900,
          bgcolor: 'background.paper',
          gap: 2,
          display: "flex",
          flexDirection: "column"}}>

      {themeList.map((item, index) => ( 

          <div key={index}
               className="classRow">                       
              <ListItem
                // onClick={() => goToTheme(item.code)}
                disableGutters
              >
                <ListItemText primary={`${item.code} ${item.name}`} />
              </ListItem>

{/* 
              <NumberInput
                aria-label="Demo number input"
                value={value}
                onChange={(event, val) => setValue(val)}
              /> */}

              <NumberInput />
              {/* <QuantityInput
                value={value}
                onChange={(event, val) => setValue(val)}
              />  */}
                      
          </div>
      ))}
      </List>
    </>
    
  );
};
