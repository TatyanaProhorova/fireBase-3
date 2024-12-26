
type Props = {
  onSuccess: () => void;
};

type OmitThemeTypeId = Omit<ThemeType, 'id'>;



export const ThemeDataForm = (props: Props) => {

  const { onSuccess } = props;

  const [fields, setFields] = useState({
    code: '',
    name: ''
  //  ,status: ''  //   пройдена   текущая   будущая
  });

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentField) => {
      // console.log('currentField', currentField);
      return {
        ...currentField,
        [event.target.id]: event.target.value
      };
    });
  };


  return (
    <FormControl>
      <form onSubmit={sendForm} method="post">
        <div>
          <FormLabel>Число заданий в тесте по темам</FormLabel>
        </div>


        <Button type="submit"> отправить </Button>
      </form>
    </FormControl>
  );
};

