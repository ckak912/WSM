import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            {/* TODO: Create Gallery component with id that can be called here */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                ?Gallery?
            </HashLink>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/contact">
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;