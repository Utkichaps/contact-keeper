import { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({contact}) => {
  const {id, name, email, phone, type} = contact;  

  const ctx = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = ctx;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '} <span style={{float: 'right'}} className={'badge '+(type === 'professional' ? 'badge-success' : 'badge-primary')}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (<li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>)}

        {phone && (<li>
          <i className="fas fa-phone"></i> {phone}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark brn-sm" onClick={() => setCurrent(contact)}>Edit</button>
        <button className="btn btn-danger brn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
}

export default ContactItem;