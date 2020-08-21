import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { activeLink, handleClick } = props;

    // In-built method of the window object: window.onpopstate 
    // The primary reason for this method is so that duplicate URLS won't be stacked
    // on top of one another (this occurs when the same link is clicked multiple times) 
    // since those dups undermine the functionality of the browser back button.
    // This method runs only if browser back button was clicked.
    onpopstate = () => {
        handleClick(document.location.pathname);
     };

     return (
         <div className="navbar-container">
             <div>
                 <Link to="/" className={activeLink === '/' ? 'selected' : "navbar-link-content"} onClick={() => handleClick('/')}>
                     Home
                 </Link>
             </div>
             <div>
                 <Link to="/about" className={activeLink === '/about' ? 'selected' : "navbar-link-content"} onClick={() => handleClick('/about')}>
                     About
                 </Link>
             </div>
             <div>
                 <Link to="/contact" className={activeLink === '/contact' ? 'selected' : "navbar-link-content"} onClick={() => handleClick('/contact')}>
                     Contact
                 </Link>
             </div>
         </div>
     );
};