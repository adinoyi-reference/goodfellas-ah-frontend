import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import Auth from '../views/Auth';
import Hero from '../views/Hero';
import Profile from '../views/Profile';
import Header from '../components/shared/Header';
import authenticate from './hoc/authenticate';
import '../styles/styles.scss';

const User = () => (
  <div>
    <Header />
    <Route path="/user/profile" component={Profile} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Hero} />
      <Route path="/auth" component={Auth} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);
export default App;
