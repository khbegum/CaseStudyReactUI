import React, { Component } from 'react'
import Dialog from 'react-dialog'

import axios from 'axios'
export class Payment extends Component{
    serviceUrl="http://localhost:3004/api/cart/";
    sum=0;
    constructor(){
        super()
        this.state={
            isDialogOpen:false,
            cart:[],
            totalpayment:0,
            id:'',
    name:'',
    
    type:'',
    colour:'',
    cost:0,
    poster:'',
    description:'',
    productCount:0

           
        }
    }
componentDidMount(){
axios.get(this.serviceUrl).then((res)=>{
    this.setState({
        cart:res.data,
        
    })

for(let i=0;i<this.state.cart.length;i++){
    
    
    this.sum=this.sum+((this.state.cart[i].cost)*(this.state.cart[i].productCount))
    this.setState({
        totalpayment:this.sum
    })

}




})


}
cancel=()=>{
    this.props.history.push('/')}
save=()=>{
    for(let i=0;i<this.state.cart.length;i++){
        axios.delete(this.serviceUrl+this.state.cart[i]._id).then((res)=>{
          console.log(this.state.cart[i]._id)
        });
    axios.get("http://localhost:3004/api/gadgets/"+this.state.cart[i]._id).then((res)=>{
        this.setState({
            id:res.data._id,
            name:res.data.name,
            type:res.data.type,
            colour:res.data.colour,
            cost:res.data.cost,
            poster:res.data.poster,
            description:res.data.description,
            productCount:res.data.productCount-this.state.cart[i].productCount
        })
     
      //this.state.productCount=this.state.productCount-this.state.cart[i].productCount;
      //console.log(this.state.productCount)
    axios.put("http://localhost:3004/api/gadgets/"+this.state.id,this.state).then((res)=>{
        alert("Payment Success");
        this.props.history.push('/')
    })
   
})
    }
} 

render(){
        return(

                <div className="col-md-4">
            <div className="card">
                <h1>Welcome to payment</h1> 
                {this.state.cart.map((gadget,i)=>

                
                <p>{gadget.name} ({gadget.productCount}):{gadget.cost}</p>                
                
                )}
                <p>Total Payment:{this.state.totalpayment}</p>     
                <button className="btn btn-success" onClick={this.save}>Save</button><button onClick={this.cancel} className="btn btn-danger">Cancel</button>            
                             </div>   </div>  
            
        )
    }
}