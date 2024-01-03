import React,{useState} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import './App.css'
function App() {
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
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
