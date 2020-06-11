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
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory();
function App() {
  return (
    <Router forceRefresh={true}>
    <div className="App">
     
      <Header/>
    </div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={AboutUs}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/manage" component={ManageGadget}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/edit/:_id" component={EditGadget}/>
     </Switch>
    </Router>
  );
}

export default App;
