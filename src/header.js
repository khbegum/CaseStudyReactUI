import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import axios from 'axios'


export class Header extends Component {
  serviceUrl="http://localhost:3004/api/cart/";
  loginButton;
  type;
  
  constructor(props){
      super(props);
      this.state={
          count:0,
          typeValue:""
         
      }
      

  }
  logOut(){
   
    localStorage.clear();
    // this.props.history.push("/login");
  }

  componentDidMount(){
      axios.get(this.serviceUrl).then((res)=>{
          console.log(res.data);
          this.setState({
              count:res.data.length
          })
      })
      if(localStorage.getItem('token')){

        this.loginButton=  <li className="nav-item  active">
        <Link to="/login" onClick={this.logOut} className="nav-link" >LogOut</Link>
          
        </li>   }
        else{
        this.loginButton=<ul className="navbar-nav  navbar-right ">   <li className="nav-item  active">
        <Link to="/login" className="nav-link" >Login</Link>
          
        </li>
        <li className="nav-item active">
        <Link to="/register" className="nav-link" >Register</Link>
        </li>
        </ul>}
      
     
      if(this.isEmployee()){
        this.type=<li className="nav-item active">
        <Link to="/manage" className="nav-link" >Manage Gadget</Link>
        </li>
      }
       
  }
  
isEmployee(){
  if(localStorage.getItem('type')==="Employee"){
   return true;
  }
}

  render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to="/">MusicStore</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" className="nav-link" >About Us</Link>
        </li>
        
          {this.type}
        
     
      </ul>
      <ul className="navbar-nav  navbar-right ">
      <li className="nav-item  active">
        <Link to="/cart" className="nav-link" >Cart <span class="badge">{this.state.count}</span> </Link>
        
      </li>
      {this.loginButton}
    </ul>
    
  </div>
</nav>
            </div>
        )
    }
}

export default withRouter(Header)



