import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
export class Home extends Component {
    serviceUrl="http://localhost:3004/api/gadgets/"
    constructor(){
        super();
        this.state={
            gadgets:[],
            userName:""
        }
        

    }
    addToCart=(_id,name, type, colour, cost, poster, description,productCount)=>{
        if(localStorage.getItem('token')){
let newGadgetsInCart=[...this.state.gadgets];
let newGadgetInCart={
     _id:_id,
name:name,
type:type,
colour:colour,
cost:cost,
poster:poster,
description:description,
productCount:productCount
}

axios.post("http://localhost:3004/api/cart/",newGadgetInCart).then((res)=>{
    newGadgetsInCart.push(newGadgetInCart);
    this.setState({gadgets:newGadgetsInCart})
})}
else{
    this.props.history.push('/login')
}
}
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            console.log(res.data);
            this.setState({
                gadgets:res.data
            })
        })
        let id=localStorage.getItem('_id');
        axios.get("http://localhost:3004/api/users/"+id).then((res)=>{
this.setState({

    userName:res.data.name
})


        })
    }
    render() {
        return (
           <div>
               
                           <div className="container-fluid d-flex justify-content-center" >
          <text><h1  class="display-4">Hello, {this.state.userName}!</h1>
          
                              </text> 
          </div>
              
          
            <div className="container-fluid d-flex justify-content-center">
           <div className="row">{this.state.gadgets.map((gadget,i)=>
               <div className="col-md-4">

              
  <div className="card">
      <div className="overflow">
 
          <div>
            <div className="card-body text-dark">
            <p><img src={gadget.poster} width="150"height="150"className="card-img-top" /></p>
            <p>{gadget.id}</p>
            <p >{gadget.name}</p>
            <p >{gadget.cost}</p>
            <p>{gadget.type}</p>
            <p>{gadget.colour}</p>
            <p >{gadget.description}</p>
            {gadget.productCount>0?          <button onClick={()=> this.addToCart(gadget._id,gadget.name,gadget.type,gadget.colour,gadget.cost,gadget.poster,gadget.description,gadget.productCount)} class="btn btn-primary btn-right">Add to Cart</button>
          : <button  class="btn btn-success btn-right" disabled>No Stock</button>          }
          </div>
          
         
         
          
          </div>
  </div>
              
          </div>
           </div> 
         )} </div>
           </div>
          </div>          
        )
    }
}

export default withRouter(Home)
