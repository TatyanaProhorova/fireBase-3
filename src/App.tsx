// import './App.scss';
import { Sidebar } from './shared/components/Sidebar/Sidebar';
import { TutorPage } from './pages/TutorPage/TutorPage';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { Header } from './shared/components/Header/Header';
import { Authorization } from './pages/Authorization/Authorization';
import { Profile } from './pages/profilePage/Profile';
import { useNavigate, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="layout">
        <main>
          <div className="content">
            Some content
            <Routes>
              <Route path="/admin" element={<Admin />} />              
              <Route path="/login" element={<Authorization />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student/:studentId" element={<StudentPage />} /> // : изменяемая часть // : страница студента для препода
              <Route path="/tutor" element={<TutorPage />} />
              <Route path="/profile/:email" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
