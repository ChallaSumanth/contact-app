import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";
const ContactDetail = (props) =>{
//const{name, email} = props.location.state.contact;
console.log(props);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <br>
                    </br>
                    <br></br>
                    <br/>
                    <br/>
                    <br/>
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">TestUser</div>
                    <div className="description">Test@gamil.com</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
};

export default ContactDetail;