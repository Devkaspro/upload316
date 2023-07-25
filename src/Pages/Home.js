import InsightsIcon from '@mui/icons-material/Insights';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import { IconButton } from '@mui/material';
import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar';
import { ButtonContainer, Discription, FirstButton, HomeContainer, SecButton, Title } from './style';
const Home = () => {
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
            </HomeContainer>
            <div style={{ height: '400px' }} />
            <div>
                This is the service page. Coming Soon...
            </div>
            {/* <FeaturesAndServices /> */}
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};

export default Home;;