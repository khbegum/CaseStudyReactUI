import React, { Component } from 'react'
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router-dom'
const history = createHistory();
export class ManageGadget extends Component {
    serviceUrl = "http://localhost:3004/api/gadgets/"

    constructor() {
        super();
        this.name = React.createRef();
        this.type = React.createRef(); this.colour = React.createRef();
        this.cost = React.createRef();
        this.poster = React.createRef();
        this.description = React.createRef();
        this.state = {
            gadgets: []
        }


    }
    addGadget = (name, type, colour, cost, poster, description,productCount) => {
        let newGadgets = [...this.state.gadgets];
        let newGadget = {
            name: name,
            type: type,
            colour: colour,
            cost: cost,
            poster: poster,
            description: description,
            productCount:productCount
        }
        axios.post(this.serviceUrl, newGadget).then((res) => {
            newGadgets.push(newGadget);
            this.setState({ gadgets: newGadgets })
           
        })
    }
    componentDidMount() {
        
        axios.get(this.serviceUrl).then((res) => {
            console.log(res.data);
            this.setState({
                gadgets: res.data
            })
        })
    }
    deleteGadget(gadget) {
        axios.delete(this.serviceUrl + gadget._id).then((res) => {


            let newGadgets = [...this.state.gadgets];
            let indexPosition = newGadgets.indexOf(gadget);
            newGadgets.splice(indexPosition, 1);
            this.setState({
                gadgets: newGadgets
            })
        })
    }
    goToEditComponent = (_id) => {
        history.push('/edit/' + _id)

    }
    render() {
        return (

            <div class="col-md-6 col-md-offset-4">
                <h1>Add Gadgets Form</h1>
                <div class="well">
                    <div>
                        <form action="onSubmit">
                            <label for="">Name:</label><input ref={(ip) => this.name = ip} formControlName="name" class="form-control" type="text" name="" id="name" placeholder="Product name" /><br>
                            </br>

                            <label for="">Type:</label><input ref={(ip) => this.type = ip} formControlName="type" placeholder="Product Type" class="form-control" type="text" name="" id="type" /><br>
                            </br>
                            <label for="">Colour:</label><input ref={(ip) => this.colour = ip} placeholder="Product colour" formControlName="colour" class="form-control" name="" id="colour" /><br></br>

                            <label for="">Cost:</label><input ref={(ip) => this.cost = ip} type="number" min="1" onkeypress="return event.charCode >= 48" placeholder="Product cost" formControlName="cost" class="form-control" name="" id="cost" /><br></br>

                            <label for="">Poster:</label><input ref={(ip) => this.poster = ip} placeholder="Image Url" formControlName="poster" class="form-control" name="" id="poster" /><br></br>

                            <label for="">Desription:</label><input ref={(ip) => this.description = ip} placeholder="About Product" formControlName="description" class="form-control" name="" id="desription" /><br></br>
                            <label for="">ProductCount:</label><input ref={(ip) => this.productCount = ip} placeholder="Product count" formControlName="productCount" class="form-control" name="" id="productCount" /><br></br>



                        </form>
                        <button type="submit" onClick={() => this.addGadget(this.name.value, this.type.value, this.colour.value, this.cost.value, this.poster.value, this.description.value,this.productCount.value)} class="btn btn-primary">Add</button>
                    </div>
                    <br></br>
                    <div class="col-md-10">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Name</th> <th>Type</th> <th>Colour</th> <th>Cost</th> <th>Poster</th> <th>Descrition</th><th>ProductCount</th> <th>Product Delete</th><th>Product Edit</th>

                                </tr>

                            </thead>
                            <tbody>{this.state.gadgets.map((gadget, i) => <tr>
                                <td>{gadget.name}</td> <td>{gadget.type}</td><td>{gadget.colour}</td> <td>{gadget.cost}</td>
                            <td><img src={gadget.poster} height="100" width="100" alt="" />  </td> <td> {gadget.description}</td><td>{gadget.productCount}</td>
                                <td  ><button class="btn btn-danger" onClick={() => this.deleteGadget(gadget)}>Delete</button></td>
                                <td ><button class="btn btn-primary" onClick={() => this.goToEditComponent(gadget._id)}>Edit</button>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        )
    }
}

export default withRouter(ManageGadget);
