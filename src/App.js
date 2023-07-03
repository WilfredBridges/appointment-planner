import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  /*
  Implement functions to add data to
  contacts and appointments
  */

  //In the callback functions, set the new state with the setter function using the spread operator:
  //Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    setContacts([...contacts, newContact])
  }

  //Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
    setAppointments([...appointments, newAppointment])
  }

  

  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
