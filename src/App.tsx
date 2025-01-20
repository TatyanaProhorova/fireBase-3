// import './App.scss';
import { Sidebar } from './shared/components/Sidebar/Sidebar';
import { TutorPage } from './pages/TutorPage/TutorPage';
import { StudentPage } from './pages/StudentPage/StudentPage';
import { Header } from './shared/components/Header/Header';
import { Authorization } from './pages/Authorization/Authorization';
import { Profile } from './pages/profilePage/Profile';

import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import { ThemePage } from './pages/ThemePage/ThemePage';
import { Themes } from './pages/Themes/Themes';
import 'typeface-roboto';
import { Tests } from './pages/Tests/Tests';
import TestPage from './pages/TestPage/TestPage';

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
              <Route path="/student/:studentId" element={<StudentPage />} /> // : изменяемая часть // : страница
                                                                                студента для препода
              <Route path="/tutor" element={<TutorPage />} />
              <Route path="/profile/:email" element={<Profile />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/themes/:themeCode" element={<ThemePage />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/tests/:testID" element={<TestPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
