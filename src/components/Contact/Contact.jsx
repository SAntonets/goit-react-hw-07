import clsx from "clsx";
import css from "./Contact.module.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.Contact} id={id}>
            <div className={css.ContactData}><p>😀{name }</p>
            <p>☎ {number }</p></div>
            <button className={css.ContactBTN} onClick={handleDelete}>Delete</button> 
        </div>
    );
};

export default Contact;

