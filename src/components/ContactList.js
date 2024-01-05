import React from "react";
import CardContact from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) =>{

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    // const contacts = [{
    //     id:"1",
    //     "name":"Sumanth",
    //     "email":"test@gmail.com"
    // }]
    const renderContactList = props.contacts.map((contact) => {
        return (
            <CardContact contact={contact} 
            clickHandler = {deleteContactHandler} 
            key = {contact.id}/>
        );
    })
    return(
        <div className="ui celled list">
            <br/>
            <h2>Contact List
            <Link to="/add">
            <button className="ui right floated primary button">Add Contact</button>
            </Link>
            </h2>
        
            {renderContactList}
        </div>
    )
}
export default ContactList