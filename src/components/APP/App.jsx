import React from 'react';
import { useState , useEffect} from 'react';
import  InputForm  from "components/Form/InputFotm"
import { Container,Section,TitleContacts,Title } from './app.styled';
import { ContactList } from 'components/ContactList/ConactList';
import {Filter} from 'components/Filter/Filter';



// const App =()=>{
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
// const [filter, setFilter] = useState('');
// const savedContact = localStorage.getItem('contacts');
// useEffect(
//   ()=>{
//   if(savedContact !== null){
//     setContacts({ contacts: JSON.parse(savedContact), });
//   } else{
//     setContacts( { contacts: contacts});
// }


//   localStorage.setItem('contacts', JSON.stringify(contacts));

// },[contacts, savedContact, setContacts])

// const formSubmit = ({name, number, id})=>{
//   console.log({name, number, id})
//   const contact = {
//     id,
//     name,
//     number
//   }
//   const availableContact =()=>{
//     if (
//       contacts.some(
//         contact =>
//           contact.name.trim().toUpperCase() === name.trim().toUpperCase(),
//       )
//     ) {
//       return alert(`${name} is already in contacts!`);
//     }
//     return {
//       contacts: [contact, ...contacts],
//     };
//   };
//   }
//   const getContact = () => {
//     // const { contacts, filter } = this.state;
//     const normalizedFilter = filter.trim().toLowerCase();
//     return  contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };
//   const changeFilter= e=>{
//     setFilter({filter: e.currentTarget.value })
//   }
//   const deleteContact= (contaktId)=>{
//     contacts(prevState=> ({
//       contacts: prevState.contacts.filter(contact=>contact.id !==contaktId),
//     }) )
//   }


//     // console.log(this.state.contacts)
//   return (
//     <Container>
//       <Section title="Phonebook">
//       <Title>Phonebook</Title>
//       <InputForm onSubmit={formSubmit} />
//       </Section>
//       <Section title="Contacts">
//       <TitleContacts>Contacts</TitleContacts>
//       <Filter value={filter} onChange={changeFilter} />
//       {/* <Filter onFilterSubmit={this.filter} /> */}
//       <ContactList contacts={getContact()} onDeleteContact={deleteContact} />
//       </Section>
//     </Container>
//   );
// };

const contactsStandart = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const items = localStorage.getItem('contacts');
    if (items) {
      return JSON.parse(items);
    } else {
      return contactsStandart;
    }
  });
  const [filter, setFilter] = useState('');

  const formSubmit = ({ name, number, id }) => {
    const normalizedContact = name.trim().toUpperCase();
    const availableContact = contacts.some(
      contact => contact.name.trim().toUpperCase() === normalizedContact,
    );

    if (availableContact) {
      return alert(`${name} is already in contacts!`);
    } else {
      const newContact = { id, name, number };
      setContacts(prev => [newContact, ...prev]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFitler = e => {
    setFilter(e.currentTarget.value);
  };

  const getContact = () => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    // console.log("Обновилось поле contacts");
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <InputForm onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={changeFitler} />
        <ContactList contacts={getContact()} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}


export default App
