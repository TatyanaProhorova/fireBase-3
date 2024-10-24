// import './App.scss';
import { Sidebar } from './shared/components/Sidebar/Sidebar';
import { TutorPage } from './pages/TutorPage/TutorPage';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { Header } from './shared/components/Header/Header';
import { Authorization } from './pages/Authorization/Authorization';

import { useNavigate, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';

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
              <Route path="/register" element={<Register />} />
              <Route path="/student/:studentId" element={<StudentPage />} /> // : изменяемая часть
              <Route path="/tutor" element={<TutorPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
