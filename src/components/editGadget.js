import React, { Component } from 'react';
import axios from 'axios'
//import createHistory from 'history/createBrowserHistory';
import {withRouter} from 'react-router-dom'
const history=require('history').createBrowserHistory
export class EditGadget extends Component {
    constructor(props){
super(props);
this.state={    
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
    serviceUrl="http://localhost:3004/api/gadgets/"
    componentDidMount(){
        let id=this.props.match.params._id;
        console.log(this.props.match.params._id)
        axios.get(this.serviceUrl+id).then((res)=>{
            console.log(res.data)
            this.setState({
                id:res.data._id,
                name:res.data.name,
                type:res.data.type,
                colour:res.data.colour,
                cost:res.data.cost,
                poster:res.data.poster,
                description:res.data.description,
                productCount:res.data.productCount
            })
        })

    }
    cancel=()=>{
this.props.history.push('/manage');
    }
    onchanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    save=()=>{

console.log(this.state)
axios.put(this.serviceUrl+ this.state.id,this.state).then(()=>{
    
})
this.props.history.push('/manage');
    }
    render() {
        const{name, type, colour, cost, poster, description,productCount}=this.state
        return (
            <div>
              <div class="col-md-4 col-md-offset-4" >
    <form action="">
<div class="form-group">
    <label >Gadget Name</label>
<input type="text" onChange={this.onchanged} name="name" value={name}  class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Type</label>
<input type="text" onChange={this.onchanged} name="type" value={type}  class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Colour</label>
<input type="text" onChange={this.onchanged} name="colour" value={colour} class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Cost</label>
<input type="text"onChange={this.onchanged} name="cost" value={cost} class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Poster Url</label>
<input type="text"onChange={this.onchanged} name="poster" value={poster} class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Description</label>
<input type="text" onChange={this.onchanged} name="description" value={description}  class="form-group"/>

</div>
<div class="form-group">
    <label >Gadget Product count</label>
<input type="text" onChange={this.onchanged} name="productCount" value={productCount}  class="form-group"/>

</div>
<button onClick={()=>this.save()} class="btn btn-success" >Save</button> &nbsp;
<button onClick={()=>this.cancel()} class="btn btn-danger">Cancel</button>
    </form>
</div>
  
            </div>
        )
    }
}

export default withRouter(EditGadget)
