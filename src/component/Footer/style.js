import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const FooterMainContainer = styled.div`
    ${ '' /* border:1px solid red; */ }
    ${ '' /* height:400px; */ }
    height: 300px;
    background-color: #fff;
    box-shadow: rgba(3, 46, 78, 0.1) 3px 1px 12px 5px;
    padding:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align: center;
    @media (max-width:950px){
        margin-top:-10%;
        };
            

`;

export const FooterMarketingFooter = styled.div`
    display: flex;
    margin: 10px;
    height: 270px;
    ${ '' /* border: 1px solid red; */ }
    align-items: flex-start;
`;

export const FooterMarketingSubFooter = styled.div`
    

`;
// export default function MarketingPage()

export const FooterLogoType = styled.div`
    width: 300px;
`;
export const FooterGroup1 = styled.div`
    width: 300px;
`;
export const FooterGroup2 = styled.div`
    width: 300px;
`;
export const FooterGroup3 = styled.div`
    width: 300px;
`;
export const CompanyLogo = styled.div`
    ${ '' /* width: 200px; */ }
    ${ '' /* padding-left: 15%; */ }

`;
export const CompanyDetails = styled.div`
    ${ '' /* width: 200px; */ }
    margin-top: 40px;
    line-height: 25px;
    ${ '' /* padding-left: 15%; */ }

`;
export const CompanyTable = styled.div`
    ${ '' /* width: 200px; */ }
    margin-top: 20px;
    letter-spacing: -.01em;
    line-height: 25px;
    font-size: 9pt;
    color: #6c757d!important;
    cursor: pointer;
    ${ '' /* padding-left: 15%; */ }

`;
export const ContributersDetails = styled.div`
    ${ '' /* width: 200px; */ }
    margin-top: 20px;
    letter-spacing: -.01em;
    line-height: 25px;
    font-size: 9pt;
    color: #6c757d!important;
    ${ '' /* padding-left: 15%; */ }
    ${ '' /* cursor: pointer; */ }

`;
export const ResourcesDetails = styled.div`
    ${ '' /* width: 200px; */ }
    margin-top: 20px;
    cursor: pointer;
    letter-spacing: -.01em;
    line-height: 25px;
    font-size: 9pt;
    color: #6c757d!important;
    ${ '' /* padding-left: 15%; */ }

`;
export const FooterLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #6c757d!important;`;