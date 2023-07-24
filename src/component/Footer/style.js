import { styled } from "styled-components";
export const FooterMainContainer = styled.div`
    ${ '' /* border:1px solid red; */ }
    height:400px;
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