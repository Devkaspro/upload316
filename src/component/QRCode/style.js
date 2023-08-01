import { styled } from "styled-components";

export const QrMainContainer = styled.div`
    text-aligin: center;
    //  border:1px solid gray;
    margin-top: 28px;
    //  width :97%;
    //border: 1px solid gray;
    //width: 820px;
    //margin: auto;
    @media (max-width: 768px){
        max-height:none !important;
        min-height: none!important;
        overflow-y: scroll;
    }
`;
export const QrTitle = styled.div`
    margin:10px;
        text-align: center;


`;
export const QrDescription = styled.div`
    font-size: small
    color:#08c
    margin:5% auto ;
    text-align:center;
    padding:.3em .6em; /* padding top and bottom */
    box-shadow:inset #fff 0 -1px 0 rgba(0,0)

`;
export const QrContainer = styled.div`
    text-align:center;
        

`;