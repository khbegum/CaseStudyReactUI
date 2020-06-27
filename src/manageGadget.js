import React, { Component } from 'react'
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router-dom'
import GadgetList from './gadgetlist';
const history = createHistory();
export class ManageGadget extends Component {
    serviceUrl = "http://localhost:3004/api/gadgets/"

    constructor() {
        super();
        // this.name = React.createRef();
        // this.type = React.createRef(); this.colour = React.createRef();
        // this.cost = React.createRef();
        // this.poster = React.createRef();
        // this.description = React.createRef();
        this.state = {
           
                name: "",
            type: "",
            colour: "",
            cost: 0,
            poster: "",
            description: "",
            productCount:0
           ,
            gadgets:[]
                }


    }
    addGadget = () => {
        console.log(this.state);
        window.location.reload()
                   let newGadgets = [...this.state.gadgets];
        let newGadget = {
            name: this.state.name,
            type: this.state.type,
            colour: this.state.colour,
            cost: this.state.cost,
            poster: this.state.poster,
            description: this.state.description,
            productCount:this.state.productCount
        }
        axios.post(this.serviceUrl, newGadget).then((res) => {
            newGadgets.push(newGadget);
            this.setState({ gadgets: newGadgets })
           
        })
    }
    onChanged=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    componentDidMount() {
        
        axios.get(this.serviceUrl).then((res) => {
            console.log(res.data);
            this.setState({
                gadgets: res.data
            })
        })
    }
    deleteGadget=(gadget)=>{
        axios.delete(this.serviceUrl+gadget._id).then((res)=>{

       
        let newGadgets=[...this.state.gadgets];
        let indexPosition=newGadgets.indexOf(gadget);
        newGadgets.splice(indexPosition,1);
        this.setState({
            gadgets:newGadgets
        })
    })
    }
    render() {
        const {name,type,colour,cost,poster,description,productCount}=this.state
        return (

            <div class="col-md-6 col-md-offset-4">
                <h1>Add Gadgets Form</h1>
                <div class="well">
                    <div>
                        <form action="onSubmit" onSubmit={this.addGadget}>
                            <label for="">Name:</label><input onChange={this.onChanged}  class="form-control" type="text" name="name" id="name" placeholder="Product name" value={name} /><br>
                            </br>

                            <label for="">Type:</label><input onChange={this.onChanged} formControlName="type" placeholder="Product Type" class="form-control" type="text" name="type" id="type" value={type}/><br>
                            </br>
                            <label for="">Colour:</label><input onChange={this.onChanged} placeholder="Product colour" formControlName="colour" class="form-control" name="colour" id="colour"value={colour} /><br></br>

                            <label for="">Cost:</label><input onChange={this.onChanged} type="number" min="1" onkeypress="return event.charCode >= 48" placeholder="Product cost" formControlName="cost"value={cost} class="form-control" name="cost" id="cost" /><br></br>

                            <label for="">Poster:</label><input onChange={this.onChanged} placeholder="Image Url" formControlName="poster" class="form-control" name="poster" id="poster"value={poster}/><br></br>

                            <label for="">Desription:</label><input value={description} onChange={this.onChanged} placeholder="About Product" formControlName="description" class="form-control" name="description" id="desription" /><br></br>
                            <label for="">ProductCount:</label><input value={productCount} onChange={this.onChanged} placeholder="Product count" formControlName="productCount" class="form-control" name="productCount" id="productCount" /><br></br>



                        </form>
                        <button type="submit" onClick={()=>this.addGadget()} class="btn btn-primary">Add</button>
                    </div>
                    <br></br>
                    <div class="col-md-10">
                        <GadgetList history={history} gadgets={this.state.gadgets} deleteGadget={this.deleteGadget}></GadgetList>   </div>
                 </div>
            </div>


        )
    }
}  

export default withRouter(ManageGadget);
   