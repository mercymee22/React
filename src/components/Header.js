import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';

const Header = ()=> {
        const [menuOpen, setMenuOpen] = useState(false); {/* call to useState. Return value = menuOpen. menuOpen variable will track whether the menu is open or closed. set to a default of false.  */}
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={NucampLogo} alt='nucamp logo' className='float-start' />
                <h1 className='mt-1'>NuCamp</h1>
            </NavbarBrand>
                                                                        {/* function to run when the toggler button is clicked. (curly braces because javascript is inside.)  */}
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>    {/* calls the setMenuOpen function and returns the opposite of the value of menuOpen, so true. */}
            <Collapse isOpen={menuOpen} navbar>                         {/* reactstrap prop isOpen is used to determine whether to show the collapsed menu or not. toggles */}              
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'> {/*to prop path for directory is passed to the router code in the app component located in app.js.  The instructions in the app component route this to the corresponding component, ie: CampsitesDirectoryPage */}
                            <i className='fa fa-list fa-lg' /> Directory  
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
    </Navbar>
    )
}

export default Header;