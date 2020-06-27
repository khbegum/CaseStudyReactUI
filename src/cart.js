import React, { Component } from 'react'
import axios from 'axios'
export class Cart extends Component {
   display;
   key;


    serviceUrl="http://localhost:3004/api/cart/"
    constructor(){
        super();
        this.state={
enableEdit:true,
            cart:[],
        gadget:{   id:'',
    name:'',
    
    type:'',
    colour:'',
    cost:0,
    poster:'',
    description:'',
    productCount:0
        },
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
    deleteFromCart(gadget){
        axios.delete(this.serviceUrl+gadget._id).then((res)=>{

       
        let newGadgets=[...this.state.cart];
        let indexPosition=newGadgets.indexOf(gadget);
        newGadgets.splice(indexPosition,1);
        this.setState({
            cart:newGadgets
        })
    })
    }
    editProductCount(_id){
        this.key=_id;
axios.get(this.serviceUrl+_id).then((res)=>{
    console.log(res.data)
 axios.get("http://localhost:3004/api/gadgets/"+_id).then((response)=>{
            this.setState({
               enableEdit:false,
               id:res.data._id,
                name:res.data.name,
                type:res.data.type,
                colour:res.data.colour,
                cost:res.data.cost,
                poster:res.data.poster,
                description:res.data.description,
                productCount:res.data.productCount,
                gadget:response.data
            })
        })
           
})



    }
   
    componentDidMount(){
        axios.get(this.serviceUrl).then((res)=>{
            console.log(res.data);
            
            if(res.data.length<=0){
              this.display =  <h1>Sorry! you don't have any product in cart </h1>            }

            this.setState({
                cart:res.data
            })
        })
    }
    save=()=>{
        if(this.state.gadget.productCount>=this.state.productCount){
        axios.put(this.serviceUrl+ this.state.id,this.state).then(()=>{
            this.setState({
                enableEdit:true
            })
        })
    }
else{
    alert('products are out of stock');
    this.setState({
        enableEdit:true
    })
}    }
    cancel=()=>{
        this.setState({
            
            enableEdit:true
        })
    }
    onchanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    payment=()=>{
        this.props.history.push('/payment')
    }
    render() {
        if(localStorage.getItem('token')){
            const{productCount}=this.state
        return (
            <div>
            <div className="container-fluid d-flex justify-content">
                {this.display}
            <div className="row">{this.state.cart.map((gadget,i)=>
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
             <p>
        {this.state.enableEdit  ?         
          <span >{gadget.productCount} <button  className="btn btn-outline-primary" onClick={()=>this.editProductCount(gadget._id)}>Edit</button></span>
             
             : 
            
                  <span><input type="number" onChange={this.onchanged}name="productCount" value={productCount} /><button className="btn btn-success" onClick={this.save}>Save</button><button className="btn btn-danger" onClick={this.cancel}>Cancel</button></span>
             
        }
             
             
              </p>
           <button onClick={()=> this.deleteFromCart(gadget)} class="btn btn-outline-danger btn-right">Delete</button>
           
           
          
          
           
           
   </div>
               
           </div>
            </div> 
          )}
          
           </div>
           
                     </div>
                     {this.state.cart.length>0?
          <button onClick={this.payment} className="btn btn-primary">Payment</button> :''}
                     </div>
           
        )
    }
else{
return(
    <h1>Please login!</h1>)
}


}
}

export default Cart
