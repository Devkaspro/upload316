import React from 'react';
import Navbar from '../component/Navbar';

const Home = () => {
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
                    Development & In-house Apps Wireless Installation
                </h3>
            </div>
        </>
    );
};

export default Home;;