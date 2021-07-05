import { useContext, Fragment } from "react"
import ContactContext from "../../context/contact/contactContext"
import ContactItem from "./ContactItem";

const Contacts = () => {

  const ctx = useContext(ContactContext);
  const { contacts } = ctx;

  return <Fragment>
    {contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
  </Fragment>
}

export default Contacts