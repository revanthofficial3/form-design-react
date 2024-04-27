import React, { Component } from 'react'
import image from '../assets/image.png'
import './Form.css'

interface Props{

}
interface State{
    name:string,
    fathername:string,
    address:string,
    email:string

}

export default class Form extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            name:"",
            address:"",
            fathername:"",
            email:""
           
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

    handlechange3=(event:any)=>{
        this.setState({
            // pincode:event.target.value
        })
    }

    handlechange4=(event:any)=>{
        this.setState({
             email:event.target.value
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
                    <div className='name-text'>
                    <h3>Name:</h3>
                    <input type="text" 
                    value={this.state.name}
                    onChange={this.handlechange}
                    ></input></div>
                    
                    <div className='name-text1'>
                    <h3>Father Name:</h3>
                    <input type="text"
                    value={this.state.fathername}
                    onChange={this.handlechange1}
                    ></input></div>
                    </div>

                    <div className='addr-common'>
                        <h3>Address:</h3>
                        </div>  
                        <div className='addr'>
                        <input type="text1"
                    value={this.state.address}
                    onChange={this.handlechange2}
                    ></input>
                   
                    </div>
                    
                    <div id='gender-common'>
                        <h3 className='gender'>Gender:</h3>
                        <input type="radio"
                        name="gender"
                        ></input><span  className='male'>Male</span>
                        <input type="radio"
                        name="gender"
                        ></input><span className='male'>Female</span>
                    </div>

                    <div className='state-wise'>
                        <div>
                            <h3>State:</h3>
                            <select>
                                <option value=" "> </option><option value="Tamilnadu">Tamilnadu</option><option value="Kerala">Kerala</option>
                            </select>
                        </div>
                        <div className='city'>
                            <h3>City:</h3>
                            <select>
                                <option value=" "> </option><option value="Chennai">Chennai</option><option value="coimbatore">Coimbatore</option>
                            </select>
                        </div>
                    </div>

                    <div>
                            <h3>Pincode:</h3>
                            <select>
                                <option value=" "> </option><option value="600001">600001</option><option value="600002">600002</option>
                            </select>
                    </div>

                    <div>
                        <h3>Mobile No:</h3>
                        <input type="number"
                    // value={this.state.pincode}
                    onChange={this.handlechange3}
                    ></input>
                    </div>

                    

                    <div>
                            <h3>Course:</h3>
                            <select>
                                <option value=" "> </option><option value="CSE">Computer Operator and Programming Assistant</option><option value="mech">Mechanical Engineering</option>
                            </select>
                    </div>

                    <div>
                        <h3>Email:</h3>
                        <input type="email"
                    value={this.state.email}
                    onChange={this.handlechange4}
                    ></input>
                    </div>

                    <div className='btn'>
                        <button className='btn1'>Reset All</button>
                        <button className='btn2'>Submit Form</button>
                    </div>


                    </div>

                </div>
            </div>
           
            
        )
    }
}

