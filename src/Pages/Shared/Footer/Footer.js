import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
            <footer className='container text-secondary text-center'>
                <p>Copyright @{getCurrentYear()} | Gadget Zone. All Rights Reserved</p>
            </footer>
    );
};

export default Footer;