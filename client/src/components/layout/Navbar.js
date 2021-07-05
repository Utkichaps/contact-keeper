import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({ title, icon }) => {
  return <div className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <l1>
      <Link to='/about'>About</Link>
      </l1>
    </ul>
  </div>
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
}