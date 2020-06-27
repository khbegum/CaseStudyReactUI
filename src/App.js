import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './home';
import AboutUs from './aboutus';
import Login from './login';
import Register from './register';
import ManageGadget from './manageGadget';
import Cart from './cart';
import EditGadget from './editGadget';
import createHistory from 'history/createBrowserHistory';
import ErrorHandler from './errorHandler';
import { Payment } from './payment';
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
