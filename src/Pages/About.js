import React from 'react';
import Navbar from '../component/Navbar';

const About = () => {
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
                    About
                </h3>
            </div>
        </>

    );
};

export default About;