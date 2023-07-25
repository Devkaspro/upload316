import React from 'react';
import { CompanyDetails, CompanyLogo, CompanyTable, ContributersDetails, FooterGroup1, FooterGroup2, FooterGroup3, FooterLink, FooterLogoType, FooterMainContainer, FooterMarketingFooter, FooterMarketingSubFooter, ResourcesDetails } from './style';
import { COMPANY_ADDRESS, COMPANY_EMAIL_ADDRESS, COMPANY_PHONE_NUMBER } from '../../constants/constant';
import { Logo } from '../Navbar/style';

const Footer = () => {
    return (
        <FooterMainContainer>
            <FooterMarketingFooter>
                <FooterLogoType>
                    <CompanyLogo>
                        <Logo> <img src="https://img.freepik.com/premium-vector/modern-letter-c-wing-logo-illustration-design_608606-230.jpg" alt="Upload316" /> </Logo>
                    </CompanyLogo>
                    <CompanyDetails>
                        {COMPANY_PHONE_NUMBER}<br />
                        {COMPANY_EMAIL_ADDRESS}<br />
                        {COMPANY_ADDRESS}
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