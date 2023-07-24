import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
position: sticky;
top: 0px;
height: 70px;
color: #41807b;
display: flex;
font-size: 20px;
align-items: center;
justify-content:space-between;
padding: 0px 115px;
background-color:#fff ;
box-shadow: rgba(3, 46, 78, 0.1) 0px 1px 3px -1px;
`;

export const Logo = styled.div`
${'' /* border: 1px solid #c3c3c3; */}
`;
export const NavbarMenu = styled.div`
justify-content:space-between;
width: 400px;
${'' /* border: 1px solid #c3c3c3; */}
display: flex;
align-items: center;

`;
export const NavbarLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #41807b;
${'' /* border: 1px solid #c3c3c3; */}
`;

export const NavBtn = styled.div`
justify-content:space-between;
width: 70px;
display: flex;
align-items: center;
`;

export const NavBtnLink = styled(Link)`
    font-size: 25px;
     cursor: pointer;
    text-decoration: none;
    color: #41807b;

`;

