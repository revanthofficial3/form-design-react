import React, { Component } from "react"
import image from '../assets/image.png'
import './Form.css'

interface Props{

}
interface State{
    name:string,
    fathername:string,
    address:string,

}

export default class Form extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            name:"",
            address:"",
            fathername:"",
           
        }
    }

    handlechange=(event:any)=>{
        this.setState({
            name:event.target.value
        })
    }

    handlechange1=(event:any)=>{
        this.setState({
            fathername:event.target.value
        })
    }

    handlechange2=(event:any)=>{
        this.setState({
            address:event.target.value
        })
    }

    render(){
        return(
            <div className="body">
                <div>
                    <img src={image} className="img"></img>
                </div>
                <div className="para">
                    <div>
                    <h1>STUDENT REGISTRATION FORM</h1>
                    <div className="para1">
                    <div>
                    <h3>Name:</h3>
                    <input type="text"
                    value={this.state.name}
                    onChange={this.handlechange}
                    ></input></div>
                    
                    <div>
                    <h3>Father Name:</h3>
                    <input type="text"
                    value={this.state.fathername}
                    onChange={this.handlechange1}
                    ></input></div>
                    </div>

                    <div>
                        <h3>Address</h3>
                        <input type="text"
                    value={this.state.address}
                    onChange={this.handlechange2}
                    ></input>
                    </div>
                    
                    <div>
                        <h3>Gender:</h3>
                        <input type="radio"
                        ></input>Male
                        <input type="radio"
                        ></input>FeMale
                    </div>
                    </div>

                </div>
            </div>
           
            
        )
    }
}
