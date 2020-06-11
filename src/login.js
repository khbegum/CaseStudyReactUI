import React, { Component } from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import {withRouter} from 'react-router'
const history=createHistory();

export class Login extends Component {
  serviceUrl = "http://localhost:3004/api/auth/";
  constructor(props){
    super(props)
    this.email=React.createRef();
    this.password=React.createRef();
  }
  logIn( email, password){
    

    let loginInfo = {
      
      email: email, 
      
      password: password,
      
    }
   

    
    axios.post(this.serviceUrl, loginInfo).then(()=>{
      alert('success')
   history.push('/')
    }).catch((error)=>{
      
      console.log(error)
    })
    

  }
    render() {
        return (
          <div class="col-md-6 col-md-offset-4">
          <h1>Registration Form</h1>
          <div class="well">
            <form action="" className="formGroup">
          
          
          <label for="">Email:</label><input ref={(ip)=>this.email=ip} formControlName="email" class="form-control"type="text" name="" id="email"/><br></br>
         
      
           
            
            <label for="">Pass Word:</label><input ref={(ip)=>this.password=ip} formControlName="password"class="form-control" type="password" name="" id="password"/><br></br>
            
              
        </form>  
        </div>
           <button type="submit" onClick={()=>this.logIn(this.email.value,this.password.value)} class="btn btn-primary">Sign Up</button>
        </div>
        
        )
    }
}

export default withRouter(Login)
