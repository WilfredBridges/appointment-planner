import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [duplicate, setDuplicate] = useState(false)

  useEffect(() => {
    //Check for duplicate contact name
    const isDuplicate = contacts.some((contact) => contact.name === name);
    setDuplicate(isDuplicate);
  }, [contacts, name]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!duplicate) {
      // Add new contact if it's not a duplicate
      const newContact = {
        name: name,
        email: email,
        phone: phone
      }
      addContact(newContact);

      //clear the form
      setName('');
      setEmail('');
      setPhone('');
    }
  };

 
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
