import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';



const ContactList = () => {


    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter);  

    
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));


    return ( <ul className={css.contactList}> 
        {filteredContacts.map(contact => (
            <li key={nanoid()}><Contact  id={contact.id} name={contact.name} number={contact.number} /></li>
        ))}</ul>
    );
}


export default ContactList;
