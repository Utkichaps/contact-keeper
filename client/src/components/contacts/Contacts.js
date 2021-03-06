import { useContext, Fragment } from "react"
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ContactContext from "../../context/contact/contactContext"
import ContactItem from "./ContactItem";

const Contacts = () => {

  const ctx = useContext(ContactContext);
  const { contacts, filtered } = ctx;

  if(contacts.length === 0) {
    return <h4>
      Please add a contact
    </h4>
  }

  return <Fragment>
    <TransitionGroup>
    {filtered !== null ? 
    filtered.map(contact => <CSSTransition key={contact.id} timeout={500} className="item">
      <ContactItem contact={contact} />
      </CSSTransition> ) : 
    contacts.map(contact => <CSSTransition key={contact.id} timeout={500} className="item">
    <ContactItem contact={contact} />
    </CSSTransition> )} 
    </TransitionGroup>
  </Fragment>
}

export default Contacts