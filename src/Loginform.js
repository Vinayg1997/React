import React from "react";
import './Loginform.css'

class Loginform extends React.Component{
    constructor(){
        super();
        this.state={
            "First Name":"",
            "Last Name":"",
            "email":"",
            "country":"India"
        }

    }
 
    handleFirstNameChange=(value)=> {
        this.setState({
            "First Name":value,
        })
    }
    handleLastNameChange=(value)=> {
        this.setState({
            "Last Name":value,
        })
    }
    handleEmail=(value)=>{
        this.setState({
            "email":value
        })
    }
    handleCountry=(value)=>{
        this.setState({
            "country":value
        })
    }
    handleGender=(value)=>{
        this.setState({
            "gender":value
        })
    }
    handleCheckbox=(value)=>{
        this.setState({
            "checkbox":value
        })
    }
    handleImage=(value)=>{
        this.setState({
            "Image":value
        })
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted")
    }
    handleFormReset(event){
        event.preventDefault();
        console.log("Form Reset")
    }
    render(){
        return <div className="formData">
  
            <form onSubmit={(event)=>this.handleFormSubmit(event)} onReset={(event)=>this.handleFormReset(event)}>
            <label>First Name:</label>
            <input type="text" placeholder="Enter first Name" value={this.state["First Name"]} onChange={
                (event)=>this.handleFirstNameChange(event.target.value)
            }/> <br/>
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last Name" value={this.state["Last Name"]} onChange={
                (event)=>this.handleLastNameChange(event.target.value)
            }/>
            <div>
                <label>Email:</label>
                <input type="email" placeholder="Enter email" value={this.state.email} onChange={
                    (event)=>this.handleEmail(event.target.value)
                }/>
            </div>
            <div>
                <label>Do you want to Recieve Marketing Mails? </label> <br/>
                <input type="checkbox" name="check" value="Yes" defaultChecked onChange={(event)=>this.handleCheckbox(event.target.value)}/>Yes
                <input type="checkbox" name="check" value="No" onChange={(event)=>this.handleCheckbox(event.target.value)}/>No
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" name="Gender" value="Male" defaultChecked 
                onChange={(event)=>this.handleGender(event.target.value)}/>Male
                <input type="radio" name="Gender" value="Female" 
                onChange={(event)=>this.handleGender(event.target.value)}/>Female
                <input type="radio" name="Other" value="Female" 
                onChange={(event)=>this.handleGender(event.target.value)}/>Other
            </div>
            <div>
                <label>Country:</label>
                <select value={this.state.country} onChange={
                    (event)=>this.handleCountry(event.target.value)
                }>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Afganistan">Afganistan</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                </select>
            </div>
            <div>
                <label>Profile Picture: </label>
                <input type="file" onChange={(event)=>this.handleImage(event.target.value)} />
            </div>
            <div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
            </form>
        </div>
    }
}

export default Loginform