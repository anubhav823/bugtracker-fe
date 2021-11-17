import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/routes/home';
import { CreateNewIssue } from './components/routes/Create New Issue'
import { MyIssues } from './components/routes/MyIssues'
import { Issues } from './components/routes/issues'
import { LoginModal } from './components/routes/Login-modal';
import { Register } from './components/routes/Register-modal';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="issues" element={<Issues />} />
          <Route path="newissue" element={<CreateNewIssue />} />
          <Route path="myissues" element={<MyIssues />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginModal />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
