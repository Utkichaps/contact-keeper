import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'
const contactReducer = (state, action) => {
  switch(action.type) {
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case DELETE_CONTACT:
      return {
        ...state, 
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ADD_CONTACT:
      return {
        ...state, //necessary param
        contacts: [...state.contacts, action.payload] //what we want to change
      }
    default:
      return state
  }
}

export default contactReducer;