import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";
const CardContact = (props) =>{
    const {id, name, email} = props.contact
    //console.log(props.contact);
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt = "user"/>
        <div className="content">
            <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact.name}}}>
         <div className="header">{name} </div>
            <div>{email}</div>
            </Link>
        </div>
        <i className="ui right floated trash alternate outline icon"
        style={{color:"red", maginTop : "7px"}}
        onClick={() => props.clickHandler(id)}
        ></i>
        
    </div>
    )
};

export default CardContact;