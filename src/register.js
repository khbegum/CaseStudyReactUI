import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'

const createHistory= require('history').createBrowserHistory();


export class Register extends Component {
  serviceUrl= "http://localhost:3004/api/users/";
  constructor(){
    super();
    this.name=React.createRef();
    this.type= React.createRef();
    this.email=React.createRef();
    this.password=React.createRef();
    this.state={
      users:[],
      selectValue:"Please select value"
    }
  }
  addUser=(name, email,type, password)=> {
    console.log(type)
    let newUsers=[...this.state.users];

    let newUser = {
      name:name,
      email: email, 
      type:type,
      password: password,
      
    }
   

    
    axios.post(this.serviceUrl, newUser).then((res)=>{
      newUsers.push(newUser)
      this.setState({
        users:newUsers
      })
      console.log(newUser);
      createHistory.push('/login')
    }).catch(error=>{
      alert('user already existed')
      console.log(error)
    })
    

  }
    render() {
        return (
            
                

<div class="col-md-6 col-md-offset-4">
    <h1>Registration Form</h1>
    <div class="well">
      <form action="" className="formGroup">
    <label >User Name:</label>
    <input ref={(ip)=>this.name=ip} formControlName="name"class="form-control"type="text"  name=""id="name" /><br></br>
    
    
    <label for="">Email:</label><input ref={(ip)=>this.email=ip} formControlName="email" class="form-control"type="text" name="" id="email"/><br></br>
   

      <label for="">Type:</label><br></br>  
      <select  formControlName="type"
        ref={(ip)=>this.type=ip}
  class="form-control" >
    <option >Please Select Type</option>
        <option value="Employee">Employee</option>
        <option value="Customer">Customer</option>
        
      </select>
     
      {/* <select ref={(ip)=>this.type=ip} defaultValue="please select" class="form-control" >
        <option value="Employeess">Employeess</option>
        <option value="Customer">Customer</option>
        
      </select><br></br> */}
      
      <label for="">Pass Word:</label><input ref={(ip)=>this.password=ip} formControlName="password"class="form-control" type="password" name="" id="password"/><br></br>
      
        
  </form>  
  </div>
     <button type="submit" onClick={()=>this.addUser(this.name.value,this.email.value,this.type.value,this.password.value)} class="btn btn-primary">Sign Up</button>
  </div>
  
        )
}}

export default (Register)
