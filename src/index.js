import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Post from './components/Post/Post';
import './index.css';
import Home from './pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle';
import PostForm from './pages/Form';
// import PostStyle from './utils/style/PostStyle';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<PostForm />} />
        <Route path='/user' element={<Home />} />


      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
