import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                Kush Singhy
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/blog">
                    Blog
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/projects">
                    Projects
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/university">
                    University
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/">
                    About
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar;