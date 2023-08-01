import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { FEATURES_TITLE } from '../constants/constant';
import { FeatureDiscription, FeatureDiv, FeaturedIcons, FeaturedIconsDetails, FeaturesContainer, FeaturesMainContainer, FeaturesTitle } from './style';
import { features } from '../Helpers/helper';
const Service = () => {
    return (
        <>
            <Navbar />
            <FeaturesMainContainer>
                <FeaturesTitle>{FEATURES_TITLE}</FeaturesTitle>
                <FeaturesContainer>
                    {features.map((feature) => (
                        <FeatureDiv key={feature.id}>
                            <FeaturedIconsDetails>
                                <FeaturedIcons>
                                    {feature.icon}
                                </FeaturedIcons>
                                <p> {feature.tiitle} </p>
                            </FeaturedIconsDetails>
                            <FeatureDiscription>
                                <p>{feature.description} </p>
                            </FeatureDiscription>
                        </FeatureDiv>
                    ))}
                </FeaturesContainer>
            </FeaturesMainContainer>
            {/* <div style={{ height: '400px' }} /> */}
            <Footer />
        </>
    );
};

export default Service;;