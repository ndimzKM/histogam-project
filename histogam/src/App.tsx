import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Register from './auth/Register'
import Login from './auth/Login';
import {firebaseConfig} from './firebase';
import { initializeApp } from 'firebase/app';
import AuthRoute from './components/AuthRoute';
import { ForgotPassword } from './auth/ForgotPassword';
import { ChangePassword } from './auth/ChangePassword';

initializeApp(firebaseConfig);

export interface IAppProps {}



const App: React.FunctionComponent<IAppProps> = (props) => {

  return (
    <Routes>
      <Route path="/" element=
     {
     <AuthRoute>
        <Login />
      </AuthRoute>}/>
      <Route path="/home" element={
        <AuthRoute>
          <Home />
        </AuthRoute>}/>
      <Route path="/register" element={
        <AuthRoute>
          <Register />
        </AuthRoute>}/>

        <Route path="/forgot" element={
          <ForgotPassword />
        }/>

      <Route path="/change-password" element={
        <AuthRoute>
          <ChangePassword />
        </AuthRoute>}/>
    </Routes>
  )
}

export default App;
