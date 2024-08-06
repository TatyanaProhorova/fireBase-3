// import './App.scss';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { Authorization } from './components/authorization/Authorization';

function App() {

  return (
    <div className="app_container">
      <Header />

      <div className="layout">
        <main>
          <div className="content">
            Some content
            <div>
              <Authorization />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default App;
