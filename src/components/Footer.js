import React from 'react';
import mtaAssuredImage from '../images/mta-assured.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                <div className="text-center flex flex-col items-center justify-center">
                    <img src={mtaAssuredImage} alt="MTA Assured" className="w-16 h-auto mb-2" />
                    <h3 className="font-bold text-2xl mb-4">Wynyard Street Motors – MTA Registered</h3>
                    <p>1 Wynyard Street, Devonport,</p>
                    <p>Auckland 0624</p>
                    <p>Tel: +64 9 445 1357</p>
                </div>
                <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                        <div className="text-sm text-gray-200 font-semibold py-1">
                            &copy; {new Date().getFullYear()}{"  "}Wynyard Street Motors. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
