import React, { Component } from 'react'
import axios from 'axios'
export class Cart extends Component {
    serviceUrl="http://localhost:3004/api/cart/"
    constructor(){
        super();
        this.state={
            gadgets:[]
        }
        

    }
    deleteFromCart(gadget){
        axios.delete(this.serviceUrl+gadget._id).then((res)=>{

       
        let newGadgets=[...this.state.gadgets];
        let indexPosition=newGadgets.indexOf(gadget);
        newGadgets.splice(indexPosition,1);
        this.setState({
            gadgets:newGadgets
        })
    })
    }
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            console.log(res.data);
            this.setState({
                gadgets:res.data
            })
        })
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content">
            <div className="row">{this.state.gadgets.map((gadget,i)=>
                <div className="col-md-4">
 
               
   <div className="card">
       
  
           
             <div className="card-body text-dark">
             <div className="overflow">
             <img src={gadget.poster} width="150"height="150"className="card-img-top" />
             </div>
             <p>{gadget.id}</p>
             <h4 className="card-title" >{gadget.name}</h4>
             <p >{gadget.cost}</p>
             <p>{gadget.type}</p>
             <p>{gadget.colour}</p>
             <p >{gadget.description}</p>
             
           <button onClick={()=> this.deleteFromCart(gadget)} class="btn btn-outline-danger btn-right">Delete</button>
           
           
          
          
           
           
   </div>
               
           </div>
            </div> 
          )} </div>
            </div>
           
           
        )
    }
}

export default Cart
