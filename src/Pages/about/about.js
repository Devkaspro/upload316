import React from 'react';
import { AboutAndroid, AboutiOS } from '../../helpers/helper';
import { ANDROID_APPS, IOS_APPS } from '../../constants/constant';
import Navbar from '../../component/navbar';
import { AboutAndroidContainer, AboutLinkContainer, AboutMainContainer, AboutTable, AboutTitle, AboutiOSContainer } from './style';
import Footer from '../../component/footer/footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutMainContainer>
                <AboutLinkContainer>
                    <AboutiOSContainer>
                        <AboutTitle>{IOS_APPS}</AboutTitle>
                        {AboutiOS.map((index) => (
                            <AboutTable>
                                <p> {index.aboutTitle}</p>
                            </AboutTable>
                        ))}
                    </AboutiOSContainer>
                    <AboutAndroidContainer>
                        <AboutTitle>{ANDROID_APPS}</AboutTitle>
                        {AboutAndroid.map((index) => (
                            <AboutTable>
                                <p> {index.aboutTitle}</p>
                            </AboutTable>
                        ))}
                    </AboutAndroidContainer>
                </AboutLinkContainer>
            </AboutMainContainer>
            {/* <div style={{ height: '400px' }} /> */}
            <Footer />
        </>

    );
};

export default About;