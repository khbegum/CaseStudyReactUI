import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Header extends Component {
  serviceUrl="http://localhost:3004/api/cart/"
  constructor(){
      super();
      this.state={
          count:0
      }
      

  }
  componentDidMount(){
      axios.get(this.serviceUrl).then((res)=>{
          console.log(res.data);
          this.setState({
              count:res.data.length
          })
      })
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
      <li className="nav-item active">
        <Link to="/manage" className="nav-link" >ManageGadget</Link>
      </li>
      </ul>
      <ul className="navbar-nav  navbar-right ">
      <li className="nav-item  active">
        <Link to="/cart" className="nav-link" >Cart <span class="badge">{this.state.count}</span> </Link>
        
      </li>
      <li className="nav-item  active">
      <Link to="/login" className="nav-link" >Login</Link>
        
      </li>
      <li className="nav-item active">
      <Link to="/register" className="nav-link" >Register</Link>
      </li>
    </ul>
    
  </div>
</nav>
            </div>
        )
    }
}

export default Header



