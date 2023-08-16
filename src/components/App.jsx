import { Component } from "react";
import { InputPhonebook } from "./Phonebook/phonebook";
import { BookContacts } from "./Contacts/contacts";
import { GlobalStyled } from "./global.styled";
import contacts from './contacts.json'
import { FilterContacts } from "./Filter/filter";

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
    
  }

  componentDidMount(){
    const saveContacts = localStorage.getItem('save-contacts');
    if (saveContacts !== null){
      try {
        this.setState({
          contacts: JSON.parse(saveContacts)
        });
      } catch (error) {
        console.error('Ошибка при чтении контактов из localStorage:', error);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      
      try{
        localStorage.setItem('save-contacts', JSON.stringify(this.state.contacts))
      }catch(error) {
        console.error("OPPPS! Помилка при збереженні данних в LocalStorage", error)
      }
    }
  }

  changeFilter = newName => {
  this.setState({filter: newName})
  }

  addContacts= addNewContacts => {
    const existingContactNames = this.state.contacts.map(contact => contact.name);

    if (existingContactNames.includes(addNewContacts.name)) {
      alert('Такий контакт вже існує в вашому списку!');
      return;
    }
    this.setState({contacts: [...this.state.contacts, addNewContacts]})
  }
 
  deleteContacts =id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }), () => {
      localStorage.setItem('saved-contacts', JSON.stringify(this.state.contacts));
    });
  }
  render(){
   const {filter, contacts} = this.state;
   const visible = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return(
      <div className="wrapper-container">
  <InputPhonebook title="Phonebook" onSearchContacts={this.addContacts}/>
  <FilterContacts value={filter} onChange={this.changeFilter}/>
  <BookContacts title="Contacts" contacts={visible} onDeleteContact={this.deleteContacts}/>
  <GlobalStyled/>
      </div>
    )
  }
}
