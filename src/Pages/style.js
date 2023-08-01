import { Button } from "@mui/base";
import { Box } from "@mui/system";
import { styled } from "styled-components";

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

// export default function services page()
export const FeaturesMainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1024px;
    height:80vh;
    @media (max-width:950px){
        text-align:center;
        
    }
`;

export const FeaturesTitle = styled.h2`
    
    
`;
export const FeaturesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;

`;
export const FeatureDiv = styled.div`
    ${ '' /* ${ '' /* float: left; */ }
    display: table-cell;
    margin-right: 2.3576515979%;
    width: 43.7%;
    margin-bottom: 24px;
    padding: 0 20px;
    box-shadow: rgba(3, 46, 78, 0.1) 3px 1px 12px 5px;
    @media (max-width:950px){
        width: 95%;
    }


`;
export const FeaturedIconsDetails = styled.div`
    display: flex;
    align-items: center;
    margin:10px 0 10px;
    color:#666;
    font-size:1.25em;
    &:hover {
        cursor: pointer;
        transition:.3s ease all;
        color:#41807b!important ;
  }
        

`;
export const FeaturedIcons = styled.div`
    display: inline-block;
    padding-left: 2px;
    margin-right: 10px
`;

export const FeatureDiscription = styled.div`

`;
export const DragandDropIcon = styled.div`
    display: inline-block;
    padding-left: 2px;
    margin-right: 10px
`;

// export default function Upload page ()
export const UploadContainer = styled.div`

`;
export const QrCodeContainer = styled.div`

`;

// Contact Us Page
export const FormMainContainer = styled.div`
    display:flex;   
    align-items:center;
    justify-content:center;
    height:80vh
    

    
`;
export const FormContainer = styled.div`
    border:1px solid red;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%

`;

export const FormBoxContainer = styled(Box)`
    lexDirection: column;
    alignItems: center;
    maxWidth: 600;
    mx: auto;
    padding:40px;
    box-shadow: rgba(3, 46, 78, 0.1) 3px 1px 12px 5px;
    borderRadius: 12px;
    boxShadow: 1
`;

// About Us Page
export const AboutMainContainer = styled.div`
    //display: grid;
    //width: calc(100% - 300px);
    //justify-content: center;
    //align-items: center;
    //height:100%;
    //border: 1px solid gray;
    max-width: 62.5em;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
`;

export const AboutLinkContainer = styled.div`
    //float: left;
    //display: block;
    margin-right: 2.3576515979%;
    width: 82.9403914003%;
    margin-left: 8.5298042998%;
    margin-top: 40px;
    margin-bottom: 40px;
`;
export const AboutTitle = styled.div`
    font-size: 1.625em;
    margin: 24px 0 24px 0;
    border-bottom: 1px solid #ddd;
`;
export const AboutiOSContainer = styled.div`
    //font-size: 1.625em;
    //margin: 24px 0 24px 0;
    //border-bottom: 1px solid #ddd
`;
export const AboutAndroidContainer = styled.div`
    //font-size: 1.625em;
    //margin: 24px 0 24px 0;
    //border-bottom: 1px solid #ddd
`;
export const AboutTable = styled.div`
    margin-left: 24px;
    text-decoration: none;
    color: #0a6ebd;
`;