import { styled } from "styled-components";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const Wrapper = styled.div`
    height: -webkit-fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: rgb(127,127,213);
    //background: linear-gradient(90deg, rgba(127,127,213,1) 0%, rgba(145,234,228,1) 100%);
`;

export const Card = styled.div`
    width: calc(100% - 300px);
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background: white;

    padding: 30px 50px;
`;

export const Title = styled.h2`
    color: #444445;
    text-align: center;
`;

export const DragDrop = styled.div`
    border: 1px dashed #c0c1c2;
    height: inherit;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

export const Paragraph = styled.p`
    color: #444445;
    margin-right:10px;

`;

export const FileUploadBtn = styled.button`
    cursor: pointer;
`;

export const InputFile = styled.input`
    //opacity: 0;
    display: none;

`;

export const Downloading = styled.div`
    // border: 1px solid #c0c1c2;
    margin: 30px 0 0;
    position: relative;
`;

export const CrossButton = styled(CloseRoundedIcon)`
    // border: 1px solid;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;
export const ContentFile = styled.div`
    display: flex;
    //border : 1px solid red;
`;
export const ContentIcon = styled.img`
    width: 85px;
    height: 100p
    // border: 1px solid;
    margin: 0 10px;

`;

export const ContentTitle = styled.div`
    // border: 1px solid;
    width: -webkit-fill-available;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Text = styled.p`

`;

export const ProgressBar = styled.div`
    height: 10px;
    // border: 1px solid #c21ad1;
    border-radius: 50px;
    background-color: #ececec;
`;

export const progressLine = {
    'background': '#c21ad1',
    'height': 'inherit',
    'borderRadius': 'inherit',
};

export const SizePercentage = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const QrGenerateButton = styled.div`
    text-align: center;
    margin-top: 30px;
`;



