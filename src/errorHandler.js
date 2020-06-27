import React, { Component } from 'react'
export class ErrorHandler extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            info:null
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            info:errorInfo
        })
        if(this.state.error)
        alert('error')
            
           }
          render(){
              if(this.state.error){     
              return <div><h1>welcome</h1>
                                         </div>
                
                   
          }
         return this.props.children  
//     return(
//         <
// h1>66666666666666666Error66666666666666666666666666666</h1>    )    
    }}
export default ErrorHandler 