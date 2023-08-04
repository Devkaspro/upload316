import "../../App.css";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import QrCodeBox from '../../component/qrCode/qrCodeBox';
import Upload from '../../component/upload';
import Footer from '../../component/footer/Footer';
import { ButtonContainer, Discription, FirstButton, HomeContainer, QrCodeContainer, SecButton, Title, UploadContainer } from './style';
import Navbar from '../../component/navbar';
import { CONTACT_US_BTN, DOWNLOAD_LINK, FEATURE_BTN, HOMEPAGE_DESCRIPTION, HOMEPAGE_TITLE } from '../../constants/constant';
import { NavbarLink } from "../../component/navbar/style";

const Home = () => {
    const [qrCodeObj, setQrCodeObj] = useState();
    const [link, setLink] = useState('');

    useEffect(() => {
        // setLink(DOWNLOAD_LINK + qrCodeObj?._id);
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
            <div style={{ height: '200px' }} />
            <Footer />
        </>
    );
};

export default Home;;