# React + TypeScript + Vite

<!-- как делаем роутинг

1   Оборачиваем приложение в  <BrowserRouter> приносит  HTML5   Router API в react,,,,

2 в App, или где надо, оборачиваем  <Route> в <Routes>
в нашем случае - в <div className="content">   .
Компонент <Route> связывает URL и UI. В 1-ой  строке - пример динамического роутинга .
 <Route  path="/student/:studentid" element={<StudentPage />} /> // : изменяемая часть
              <Route  path="/tutor" element={<TutorPage />} />

3  В  StudentPage  использовали хук useParams - он дает доступ к параметрам этого конкретного пути (параметры URL этого конкретного компонента UI):  
const{ studentid } = useParams();

export const StudentPage = () => {
    const{ studentid } = useParams();
    return(
        <div>
         { studentid }
        </div>
    )
}

4  В компоненте GutterlessList используем хук useNavigate и пишем переход на страницу студента, затем функцию используем по клику

export const GutterlessList = () => {

   const navigate = useNavigate();

   const goToStudent = (id: number) => {
       navigate(`/student/${id}`);        // динам строка
     }

    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[1, 23, 33, 4, 55, 6].map((value) => (
          <ListItem
            onClick={() => goToStudent(value)} -->
