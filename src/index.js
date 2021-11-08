import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie'



function Router(){
  return(
    <CookiesProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' component={Login}/>
      <Route exact path='/articles' component={App}/>
    </Routes>
    </BrowserRouter>
    </CookiesProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();