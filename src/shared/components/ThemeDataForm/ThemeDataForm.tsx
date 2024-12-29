type Props = {
  onSuccess: () => void;
};

type OmitThemeTypeId = Omit<ThemeType, 'id'>;

export const ThemeDataForm = (props: Props) => {
  const { onSuccess } = props;

  const [fields, setFields] = useState({
    code: '',
    name: ''
    //  ,status: ''  //   ��������   �������   �������
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
          <FormLabel>����� ������� � ����� �� �����</FormLabel>
        </div>

        <Button type="submit"> ��������� </Button>
      </form>
    </FormControl>
  );
};
