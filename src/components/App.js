import React,{useState, useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import './App.css'
import { ulid } from 'ulid';
function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id : "1",
  //     "name" : "Sumanth",
  //     "email" : "challasumanth44@gmail.com"
  //   },
  //   {
  //     id : "2",
  //     "name" : "Challa",
  //     "email" : "challasumanth66308@gmail.com"
  //   }
  // ]
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, {id:ulid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });

    setContacts(newContactList);
  }
  useEffect (() =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)
    {
      setContacts(retriveContacts);
    }
  },[]);

  useEffect (() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
