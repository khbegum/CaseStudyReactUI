import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
export class GadgetList extends Component {
    serviceUrl="http://localhost:3004/api/gadgets/"
    constructor(){
        super();
        
        

    }
    
   
    goToEditComponent(id){
        this.props.history.push('/edit/'+id)
    }
    render() {
        return (
            <div>
            <table border="1">
                            <thead>
                                <tr>
                                    <th>Name</th> <th>Type</th> <th>Colour</th> <th>Cost</th> <th>Poster</th> <th>Descrition</th><th>ProductCount</th> <th>Product Delete</th><th>Product Edit</th>

                                </tr>

                            </thead>
                            <tbody>{this.props.gadgets.map((gadget, i) => <tr>
                                <td>{gadget.name}</td> <td>{gadget.type}</td><td>{gadget.colour}</td> <td>{gadget.cost}</td>
                            <td><img src={gadget.poster} height="100" width="100" alt="" />  </td> <td> {gadget.description}</td><td>{gadget.productCount}</td>
                                <td  ><button onClick={()=> this.props.deleteGadget(gadget)} class="btn btn-outline-danger btn-right">Delete</button></td>
                                <td ><button class="btn btn-primary" onClick={() => this.goToEditComponent(gadget._id)}>Edit</button>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
           </div>
           
        )
    }
}

export default withRouter(GadgetList)
