import { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const ctx = useContext(ContactContext);
  const text = useRef('');

  useEffect(() => {
    if(ctx.filtered === null) {
      text.current.value='';
    }
  },[ctx.filtered])

  const onChange = (e) => {
    if(text.current.value !== '') {
      ctx.filterContacts(e.target.value);
    } else {
      ctx.clearFilter();
    }
  }

  return <form>
    <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange} />
  </form>
}

export default ContactFilter;