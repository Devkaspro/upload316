import InsightsIcon from '@mui/icons-material/Insights';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { ButtonContainer, Discription, FirstButton, HomeContainer, SecButton, Title, UploadContainer } from './style';
import Upload from '../component/Upload';
import "../App.css";
import QrCodeBox from '../component/QRCode/QrCodeBox';
const Home = () => {
    const [qrCodeObj, setQrCodeObj] = useState();
    const [link,setLink]=useState('');

    useEffect(() => {
        setLink(qrCodeObj?.downloadLink)
        console.log(link,qrCodeObj)
    }, [qrCodeObj?.downloadLink])
    const handleQrGenerate = (qrObj) => {
        console.log(qrObj)
        setQrCodeObj(JSON.parse(qrObj));
    }
    return (
        <>
            <Navbar />
            <HomeContainer>
                <Title> Development & In-house Apps Wireless Installation.
                </Title>
                <Discription>
                    Diawi upload-316 is a tool for developers to deploy Development and In-house applications directly to the devices
                </Discription>
                <ButtonContainer>
                    <FirstButton>
                        <IconButton>
                            <MultilineChartIcon />
                        </IconButton>
                        <span>
                            Web Analytics
                        </span>
                    </FirstButton>
                    <SecButton>
                        <IconButton>
                            <InsightsIcon />
                        </IconButton>
                        <span >
                            Speed Insights
                        </span>
                    </SecButton>
                </ButtonContainer>
                <UploadContainer>
                    <Upload handleQrGenerate={handleQrGenerate} />
                </UploadContainer>
                <div>
                    {link ? <QrCodeBox link={link} /> : ""}
                </div>
            </HomeContainer>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default Home;;