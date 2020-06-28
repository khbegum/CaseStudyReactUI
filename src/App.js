import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import { Payment } from './components/payment';
import { Home } from './components/home';
import { Register } from './components/register';
import { Login } from './components/login';
import Cart from './components/cart';
import AboutUs from './components/aboutus';
import { ManageGadget } from './components/manageGadget';
import { EditGadget } from './components/editGadget';
import { Header } from './components/header';

const history = createHistory();

function App() {
  return (
    <Router forceRefresh={true}>
    <div className="App">
     
      <Header history={history}/>
    </div>
    <Switch>
      <Route exact path="/" history={history} component={Home}/>
      
      <Route exact path="/about" component={AboutUs}/>
  


      <Route exact path="/register" component={Register}/>
      <Route exact path="/manage" history={history} component={ManageGadget}/>
      <Route exact path="/cart" history={history} component={Cart}/>
      <Route exact path="/payment" history={history} component={Payment}/>
      <Route exact path="/edit/:_id" history={history} component={EditGadget}/>
      <Route exact path="/login" component={Login}/>
     </Switch>
    </Router>
  );
}

export default App;
