import { styled } from "styled-components";
import { Button } from "@mui/base";

// export default function Home page();
export const HomeContainer = styled.div`
    ${ '' /* height: 100%; */ }
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1024px
`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #171717;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: -.04em;
    line-height: 1.125;
    margin-top: 68px;
`;
export const Discription = styled.div`
    display: flex;
    color:#717273;
    justify-content: center;
    text-align: center;
    margin-top: 43px;
    line-height: 1.3;
    font-size:27px;
Í
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
    margin: 50px;
    height: 40px;
`;
export const FirstButton = styled(Button)`
    box-shadow: rgba(50, 145, 255, 0.15) 0px 2px 8px 0px;
    //padding: 0.5em 1em 0.5em 0.5em;
    border-radius: 10px;
    font-weight: 500;
    letter-spacing: -.01em;
    border: 1px solid rgba(var(--geist-foreground-rgb),.05);
    transition: background .2s ease-out;
    position: relative;
    height: 48px;
    overflow: hidden;
    background: var(--geist-background);
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: -.01em;
    font-size: 15px;
`;
export const SecButton = styled(Button)`
    box-shadow: rgba(50, 145, 255, 0.15) 0px 2px 8px 0px;
    padding: 0.5em 1em 0.5em 0.5em;
    border-radius: 10px;
    font-weight: 500;
    letter-spacing: -.01em;
    border: 1px solid rgba(var(--geist-foreground-rgb),.05);
    transition: background .2s ease-out;
    position: relative;
    height: 48px;
    overflow: hidden;
    background: var(--geist-background);
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
`;
export const FooterContainer = styled.div`
    height:400px;
`;

export const UploadContainer = styled.div`

`;
export const QrCodeContainer = styled.div`

`;
export const TotalVisitor = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 43px;
    line-height: 1.3;
    font-size: 27px;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
`;
