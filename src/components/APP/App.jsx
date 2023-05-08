import React from 'react';

import  InputForm  from "components/Form/InputFotm"
import { Container,Section,TitleContacts,Title } from './app.styled';
import { ContactList } from 'components/ContactList/ConactList';
import {Filter} from 'components/Filter/Filter';

class App extends React.Component {

state= {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ' ',
}
componentDidMount(){
  console.log("component DidMount");
  const savedContact = localStorage.getItem('contacts');
  console.log(savedContact);
  if(savedContact !== null){
    this.setState({ contacts: JSON.parse(savedContact), });
  } else{
this.setState( { contacts: this.state.contacts});
  }
};
componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate");
  console.log("prevState: ", prevState);
  console.log("this.State: ", this.state);
  if(prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

formSubmit = ({name, number, id})=>{
console.log({name, number, id})
const contact = {
  id,
  name,
  number
}
this.setState(({ contacts }) => {
  if (
    contacts.some(
      contact =>
        contact.name.trim().toUpperCase() === name.trim().toUpperCase(),
    )
  ) {
    return alert(`${name} is already in contacts!`);
  }
  return {
    contacts: [contact, ...contacts],
  };
});
}

getContact = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.trim().toLowerCase();
  return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
changeFilter= e=>{
  this.setState({filter: e.currentTarget.value })
}
deleteContact= (contaktId)=>{
  this.setState(prevState=> ({
    contacts: prevState.contacts.filter(contact=>contact.id !==contaktId),
  }) )
}

  render(){

    // console.log(this.state.contacts)
  return (
    <Container>
      <Section title="Phonebook">
      <Title>Phonebook</Title>
      <InputForm onSubmit={this.formSubmit} />
      </Section>
      <Section title="Contacts">
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      {/* <Filter onFilterSubmit={this.filter} /> */}
      <ContactList contacts={this.getContact()} onDeleteContact={this.deleteContact} />
      </Section>
    </Container>
  );
};
 }
 export default App
