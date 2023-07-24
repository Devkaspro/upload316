import React from 'react';
import { FooterMainContainer, FooterMarketingFooter, FooterMarketingSubFooter } from './style';

const Footer = () => {
    return (
        <FooterMainContainer>
            <FooterMarketingFooter>
                <div>
                    Logo & Navigation links go here.
                </div>
                <div>
                    Company
                </div>
                <div>
                    Services
                </div>
                <div>
                    Resources
                </div>

            </FooterMarketingFooter>
            <FooterMarketingSubFooter>
                Copyright © 2023 Upload316 | All rights reserved.
            </FooterMarketingSubFooter>
        </FooterMainContainer>
    );
};

export default Footer;