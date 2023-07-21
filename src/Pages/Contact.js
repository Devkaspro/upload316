import React from 'react';
import Navbar from '../component/Navbar';

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
        </>

    );
};

export default Contact;