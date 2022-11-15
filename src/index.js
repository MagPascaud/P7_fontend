import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle';
import FormPage from './pages/Form/FormPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import UserPage from './pages/User/UserPage';
import "./utils/style/mediaqueries.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/form/:id' element={<FormPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
