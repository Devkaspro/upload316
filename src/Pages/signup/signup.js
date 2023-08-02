import React from 'react';
import Footer from '../../component/footer/footer';
import Navbar from '../../component/navbar';

const SignUp = () => {
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
                    SignUp
                </h3>
            </div>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default SignUp;;