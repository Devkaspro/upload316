
import { styled } from "styled-components";

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
