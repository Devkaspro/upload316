import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import "../App.css";
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { NavbarLink } from '../component/Navbar/style';
import QrCodeBox from '../component/QRCode/QrCodeBox';
import Upload from '../component/Upload';
import { CONTACT_US_BTN, FEATURES_TITLE, FEATURE_BTN, HOMEPAGE_DESCRIPTION, HOMEPAGE_TITLE, SERVICES_BTN, features } from '../constants/constant';
import { ButtonContainer, Discription, FeatureDiscription, FeatureDiv, FeaturedIcons, FeaturedIconsDetails, FeaturesContainer, FeaturesMainContainer, FeaturesTitle, FirstButton, HomeContainer, QrCodeContainer, SecButton, Title, UploadContainer } from './style';

const Home = () => {
    const [qrCodeObj, setQrCodeObj] = useState();
    const [link, setLink] = useState('');

    useEffect(() => {
        setLink(qrCodeObj?.downloadLink);
        console.log(link, qrCodeObj);
    }, [qrCodeObj?.downloadLink]);
    const handleQrGenerate = (qrObj) => {
        console.log(qrObj);
        setQrCodeObj(JSON.parse(qrObj));
    };
    return (
        <>
            <Navbar />
            <HomeContainer>
                <Title>{HOMEPAGE_TITLE}</Title>
                <Discription>{HOMEPAGE_DESCRIPTION}</Discription>
                <ButtonContainer>

                    <NavbarLink to={'/service'}>
                        <FirstButton>
                            <Button disableElevation>{FEATURE_BTN}</Button>
                        </FirstButton> </NavbarLink>
                    <SecButton>
                        <NavbarLink to={'/contact'}>
                            <Button disableElevation>{CONTACT_US_BTN}</Button>
                        </NavbarLink>
                    </SecButton>
                </ButtonContainer>
                <UploadContainer>
                    <Upload handleQrGenerate={handleQrGenerate} />
                </UploadContainer>
                <QrCodeContainer>
                    {link ? <QrCodeBox link={link} /> : ""}
                </QrCodeContainer>
                {/* <FeaturesMainContainer>
                    <FeaturesTitle>{FEATURES_TITLE}</FeaturesTitle>
                    <FeaturesContainer>
                        {features.map((feature) => (
                            <FeatureDiv key={feature.id}>
                                <FeaturedIconsDetails>
                                    <FeaturedIcons>
                                        {feature.icon}
                                    </FeaturedIcons>
                                </FeaturedIconsDetails>
                                <FeatureDiscription>
                                    <p>{feature.description} </p>
                                </FeatureDiscription>
                            </FeatureDiv>
                        ))}
                    </FeaturesContainer>
                </FeaturesMainContainer> */}
            </HomeContainer>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default Home;;