import InsightsIcon from '@mui/icons-material/Insights';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { ButtonContainer, Discription, FirstButton, HomeContainer, SecButton, Title, UploadContainer } from './style';
import Upload from '../component/Upload';
import "../App.css";
const Home = () => {
    const [isSlideDown, setIsSlideDown] = useState(false);
    const handleButtonClick = () => {
        setIsSlideDown(!isSlideDown);
    };
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
                    <FirstButton onClick={handleButtonClick}>
                        <IconButton>
                            <MultilineChartIcon />
                        </IconButton>
                        <span>
                            Web Analytics
                        </span>
                        {/* <button onClick={handleButtonClick}>Toggle Slide Down</button> */}
                        {/* <div className={`slide-container ${ isSlideDown ? 'slide-down' : '' }`}>
                            <Upload />
                        </div> */}
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
                    <Upload className={`slide-container ${ isSlideDown ? 'slide-down' : '' }`} />
                </UploadContainer>
            </HomeContainer>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default Home;;