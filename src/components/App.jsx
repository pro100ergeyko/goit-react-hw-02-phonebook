import React, { Component } from 'react';
import {
  Wrapper,
  Container,
  PhoneBookTitle,
  ContactTitle,
} from './Global.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  handlDelete = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  handleContactFilter = () => {
    let contactFilter = [];
    const { filter, contacts } = this.state;
    if (filter) {
      contactFilter = contacts.filter(
        contact =>
          contact.name.includes(filter) ||
          contact.name.toLocaleLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
    return contactFilter;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Wrapper>
        <Container>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <ContactsForm onSubmit={this.handleSubmit} contacts={contacts} />
        </Container>
        <Container>
          <ContactTitle>Contacts</ContactTitle>
          <ContactFilter onFilter={this.handleFilter} filter={filter} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={this.handlDelete}
            contactFilter={this.handleContactFilter}
          />
        </Container>
      </Wrapper>
    );
  }
}
