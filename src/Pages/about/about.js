import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar';
import { ANDROID_APPS, IOS_APPS } from '../../constants/constant';
import { AboutiOS } from '../../helpers/helper';
import { AboutAndroidContainer, AboutLinkContainer, AboutMainContainer, AboutTable, AboutTitle, AboutiOSContainer } from './style';

const About = () => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickIOS = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClickAndroid = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        if (open)
        {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null)
            {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            <Navbar />
            <AboutMainContainer>
                <AboutLinkContainer>
                    <AboutiOSContainer>
                        <AboutTitle>{IOS_APPS}</AboutTitle>
                        <Button onClick={handleClickIOS('paper')}>
                            <AboutTable>
                                <p>iOS Details</p>
                            </AboutTable>
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Knowledge Base</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    {AboutiOS.map((index) => (
                                        <AboutTable>
                                            <p style={{ color: "black" }}> {index.aboutTitle}</p>
                                            <p> {index.description}</p>
                                        </AboutTable>
                                    ))}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </AboutiOSContainer>
                    <AboutAndroidContainer>
                        <AboutTitle>{ANDROID_APPS}</AboutTitle>
                        <Button onClick={handleClickAndroid('paper')}>
                            <AboutTable>
                                <p>Application Details</p>
                            </AboutTable>
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Knowledge Base</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    {/* {AboutAndroid.map((index) => ( */}
                                    {AboutiOS.map((index) => (
                                        <AboutTable>
                                            <p style={{ color: "black" }}> {index.aboutTitle}</p>
                                            <p> {index.description}</p>
                                        </AboutTable>
                                    ))}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </AboutAndroidContainer>
                </AboutLinkContainer>
            </AboutMainContainer>
            <div style={{ height: '400px' }} />
            <Footer />
        </>
    );
};


export default About;;