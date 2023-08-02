import { Box } from "@mui/system";
import { styled } from "styled-components";

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

