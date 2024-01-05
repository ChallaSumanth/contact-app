import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component{
     
    state ={
        name:"",
        email:"",

    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory")
            return
        }
        this.props.addContactHandler(this.state)
        console.log(this.state);
        this.setState({name:"",email:""});
    }
    checkContacts = () =>{
        if(this.state === null)
        {
            alert("No Contacts to display");
            return;
        }
    }
    render(){
        return(
            <div className="ui main">
            <br></br>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label> Name </label>
                    <input type="text" 
                    name = "name" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={ (e) => this.setState({name : e.target.value})}
                    />
                </div>
                <div className="field">
                    <label> Email </label>
                    <input type="email" 
                    name = "email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={ (e) => this.setState({email : e.target.value})}
                    />
                </div>
                <button className="ui button blue">Add</button>
                <Link to = "/">
                <button className="ui right floated button blue" onClick={this.checkContacts}>View Contacts</button>
                </Link>
            </form>
            </div>
        )
    }
}

export default AddContact;