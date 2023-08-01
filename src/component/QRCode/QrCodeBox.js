import React, { useEffect } from 'react';
import QRCode from 'react-qr-code';
import { QR_CODE_DESCRIPTION, QR_CODE_TITLE } from '../../constants/constant';
import { QrContainer, QrDescription, QrMainContainer, QrTitle } from './style';

const QrCodeBox = ({ link }) => {
    useEffect(() => {
        link = link;
        console.log(link); // eslint-disable-line no-console
    }, [link]);

    return (
        <QrMainContainer>
            <QrTitle>{QR_CODE_TITLE}</QrTitle>
            <QrDescription>{QR_CODE_DESCRIPTION}</QrDescription>
            <QrContainer>
                {link ? <QRCode
                    size={256}
                    style={{
                        height: "auto",
                        maxWidth: "200px",
                        width: "200px",
                        borderRadius: "5px",
                        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                        background: "white",
                        margin: "20px",
                        padding: "30px"
                    }}
                    value={link}
                    viewBox={`0 0 256 256`}
                /> : ''}
            </QrContainer>
        </QrMainContainer>
    );
};

export default QrCodeBox;