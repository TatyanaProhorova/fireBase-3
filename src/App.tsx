import { useState } from 'react';

// import './App.scss';
import { getUsers } from './api/api';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { Authorisation } from './components/authorisation/Authorisation';

function App() {
  return (
    <div className="app_container">
      <Header />

      <div className="layout">
        <main>
          <div className="content">
            Some content
            <div>
              <Authorisation />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
