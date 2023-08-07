import React from 'react';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar';
import { FEATURES_TITLE } from '../../constants/constant';
import { FeatureDiscription, FeatureDiv, FeaturedIcons, FeaturedIconsDetails, FeaturesContainer, FeaturesMainContainer, FeaturesTitle, PricingTableContainer } from './style';
import { features } from '../../helpers/helper';
import PricingTableComponent from './pricingTable';
import { Typography } from '@mui/material';
const Service = () => {
    return (
        <>
            <Navbar />
            <FeaturesMainContainer>
                <Typography variant="h5">{FEATURES_TITLE}</Typography>
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
                <PricingTableContainer>
                    <PricingTableComponent />
                </PricingTableContainer>
            </FeaturesMainContainer>
            <div style={{ height: "1200px" }} />
            <Footer />
        </>
    );
};

export default Service;;