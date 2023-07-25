import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',

                }}
            >
                <h3>
                    Contact
                </h3>
            </div>
            <div style={{ height: '400px' }} />
            <Footer />
        </>

    );
};

export default Contact;