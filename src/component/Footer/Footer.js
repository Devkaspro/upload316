import React from 'react';
import { CompanyDetails, CompanyLogo, CompanyTable, ContributersDetails, FooterGroup1, FooterGroup2, FooterGroup3, FooterLink, FooterLogoType, FooterMainContainer, FooterMarketingFooter, FooterMarketingSubFooter, ResourcesDetails } from './style';

const Footer = () => {
    return (
        <FooterMainContainer>
            <FooterMarketingFooter>
                <FooterLogoType>
                    <CompanyLogo>
                        <img src="" alt="Logo" />
                    </CompanyLogo>
                    <CompanyDetails>
                        Phone: +974-585-1234<br />
                        Email: support@upload316.com<br />
                        Address:<br />
                        PO Box 123, Mohali,<br /> India
                    </CompanyDetails>

                </FooterLogoType>
                <FooterGroup1>
                    Company
                    <CompanyTable>
                        <FooterLink to={'/'}>
                            Careers
                        </FooterLink><br />
                        <FooterLink to={'/about'}>
                            About us
                        </FooterLink><br />
                        <FooterLink to={'/contact'}>
                            Contact us
                        </FooterLink>
                    </CompanyTable>
                </FooterGroup1>
                <FooterGroup2>
                    Upload-316
                    <ResourcesDetails>
                        <FooterLink to={'/'}>
                            Wall of apps
                        </FooterLink><br />
                        <FooterLink to={'/'}>
                            Legal mentions
                        </FooterLink><br />
                        <FooterLink to={'/'}>
                            Knowledge base
                        </FooterLink><br />
                        <FooterLink to={'/'}>
                            Terms & conditions
                        </FooterLink><br />
                        <FooterLink to={'/'}>
                            Features & Services
                        </FooterLink>
                    </ResourcesDetails>
                </FooterGroup2>
                <FooterGroup3>
                    Project Contributers
                    <ContributersDetails>
                        @ABC<br />
                        @JaneDoe<br />
                        @BobSmith<br />
                        and many<FooterLink to={'/'}> more... </FooterLink>
                    </ContributersDetails>
                </FooterGroup3>

            </FooterMarketingFooter>
            <FooterMarketingSubFooter>
                Copyright © 2023 Upload316 | All rights reserved.
            </FooterMarketingSubFooter>
        </FooterMainContainer>
    );
};

export default Footer;