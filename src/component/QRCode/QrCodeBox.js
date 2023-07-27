import React, { useEffect } from 'react'
import QRCode from 'react-qr-code'

const QrCodeBox = ({link}) => {
    useEffect (()=>{
        link=link;
        console.log(link) // eslint-disable-line no-console
    },[link])
    
    return (
        <div>{ link?
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "200px", width: "200px" }}
                value={link}
                viewBox={`0 0 256 256`}
            />:''}
        </div>
    )
}

export default QrCodeBox