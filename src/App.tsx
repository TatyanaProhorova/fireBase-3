// import './App.scss';
import { Sidebar } from './components/sidebar/Sidebar';
import { TutorPage } from './components/tutorPage/TutorPage';
import { StudentPage } from './components/studentPage/StudentPage';
import { Header } from './components/header/Header';
import { Authorization } from './components/authorization/Authorization';

import { useNavigate, Link } from "react-router-dom";
import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <div className="app_container">
      <Header />
      <div className="layout">
        <main>
          <div className="content">
       
            Some content

            <Routes>
              <Route path="*" element={<Authorization />} />
              <Route path="/student/:studentid" element={<StudentPage />} /> // : изменяемая часть
              <Route path="/tutor" element={<TutorPage />} />
            </Routes>          
          </div>
        </main>
      </div>
    </div>
  );
}


export default App;
