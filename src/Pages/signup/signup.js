import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer/Footer';


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