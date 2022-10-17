import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle';
import FormPage from './pages/Form/FormPage';
import PostPage from './pages/Post/PostPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import UserPage from './pages/User/UserPage';
import "./utils/style/mediaqueries.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post' element={<FormPage />} />
        <Route path='/userName' element={<UserPage />} />
        <Route path='/:id' element={<PostPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
