import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { FEATURES_DEVICES_TITLE, FEATURES_TITLE, FEATURE_COMPATIBILITY_DISCRIPTION, FEATURE_COMPATIBILITY_TITLE, FEATURE_DIVICE_DISCRIPTION, FEATURE_LINK_DISCRIPTION, FEATURE_LINK_TITLE, FEATURE_LOYALITY_DISCRIPTION, FEATURE_LOYALITY_TITLE, FEATURE_SECURITY_DISCRIPTION, FEATURE_SECURITY_TITLE, FEATURE_UPLOAD_DISCRIPTION, FEATURE_UPLOAD_TITLE } from '../constants/constant';
import { FeatureDiscription, FeatureDiv, FeaturedIcons, FeaturedIconsDetails, FeaturesContainer, FeaturesMainContainer, FeaturesTitle } from './style';
const Service = () => {
    return (
        <>
            <Navbar />
            <FeaturesMainContainer>
                <FeaturesTitle>{FEATURES_TITLE}</FeaturesTitle>
                <FeaturesContainer>
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <PhoneIphoneIcon />
                            </FeaturedIcons>
                            <p>{FEATURES_DEVICES_TITLE}</p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_DIVICE_DISCRIPTION}</p>
                        </FeatureDiscription>
                    </FeatureDiv>
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <CloudUploadIcon />
                            </FeaturedIcons>
                            <p> {FEATURE_UPLOAD_TITLE} </p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_UPLOAD_DISCRIPTION} </p>
                        </FeatureDiscription>
                    </FeatureDiv>
                    <br />
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <LinkIcon />
                            </FeaturedIcons>
                            <p>{FEATURE_LINK_TITLE}</p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_LINK_DISCRIPTION}</p>
                        </FeatureDiscription>
                    </FeatureDiv>
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <SecurityIcon />
                            </FeaturedIcons>
                            <p>{FEATURE_SECURITY_TITLE}</p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_SECURITY_DISCRIPTION}</p>
                        </FeatureDiscription>
                    </FeatureDiv>
                    <br />
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <ThumbUpOutlinedIcon />
                            </FeaturedIcons>
                            <p>{FEATURE_COMPATIBILITY_TITLE}</p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_COMPATIBILITY_DISCRIPTION}</p>
                        </FeatureDiscription>
                    </FeatureDiv>
                    <FeatureDiv>
                        <FeaturedIconsDetails>
                            <FeaturedIcons>
                                <LoyaltyOutlinedIcon />
                            </FeaturedIcons>
                            <p>{FEATURE_LOYALITY_TITLE}</p>
                        </FeaturedIconsDetails>
                        <FeatureDiscription>
                            <p>{FEATURE_LOYALITY_DISCRIPTION}</p>
                        </FeatureDiscription>
                    </FeatureDiv>
                </FeaturesContainer>
            </FeaturesMainContainer>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default Service;;