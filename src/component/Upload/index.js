import React, { useRef, useState } from 'react';
import { Card, ContentFile, ContentIcon, ContentTitle, CrossButton, Downloading, DragDrop, FileUploadBtn, InputFile, Paragraph, ProgressBar, QrGenerateButton, SizePercentage, Text, Title, Wrapper, progressLine } from './style';
import { CARD_TITLE, DRAG_DROP_TITLE, GENERATE_QR_CODE, SELECT_BUTTON, UPLOAD_SERVER_URL } from '../../constants/constant';
import { convertToMB } from '../../helpers/helper';
import Button from '@mui/material/Button';
//StopPropagation is stop the click event from bubling up.
function dragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
}

// Prevent default behavior (Prevent file from being opened)
function handleDragOver(e) {
  e.stopPropagation();
  e.preventDefault();

}

const uploadObj = { loaded: 0, total: 0, title: "", content: {}, done: false };

function Upload({ handleQrGenerate }) {
  const inputRef = useRef();
  const [uploading, setUploading] = useState(uploadObj);
  const [qrCodeObj, setQrCodeObj] = useState({});
  const [reaminingTime, setRemainingTime] = useState('');

  const Handledrop = (e) => {
    console.log('Dropped');
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  };

  const handleFiles = (file) => {
    console.log('file uploaded');
    setUploading((data) => ({ ...data, title: file[0].name }));
    var data = new FormData();
    console.log("File-name", file[0].name);
    data.append("file", file[0], file[0].name);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4)
      {
        console.log(this.responseText);
        setQrCodeObj(this.responseText);
        calculateRemainingTime(this.responseText);
        console.log(this.responseText, "esponseText");
        setUploading((data) => ({ ...data, content: this.responceText, done: true }));
      }
    });

    xhr.open("POST", UPLOAD_SERVER_URL);
    xhr.upload.onprogress = (event) => {
      setUploading((data) => ({ ...data, loaded: event.loaded, total: event.total }));
    };
    xhr.send(data);


  };

  const calculateRemainingTime = (expirationDate) => {
    // Assuming the expirationDate is a string representation of a date
    const now = new Date();
    const expirationTime = new Date(expirationDate);
    const remainingMilliseconds = expirationTime.getTime() - now.getTime();

    if (remainingMilliseconds > 0)
    {
      const minutes = Math.floor(remainingMilliseconds / (1000 * 60));
      const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);
      setRemainingTime(`${ minutes } minutes and ${ seconds } seconds`);
    } else
    {
      setRemainingTime('Session Expired');
    }
  };

  const handleCrossButton = () => {
    console.log("working hear");
    setUploading(uploadObj);
  };

  const title = uploading.title;
  console.log(uploading);
  const total = parseFloat(convertToMB(uploading.total).toFixed(2));
  const loaded = parseFloat(convertToMB(uploading.loaded)).toFixed(2);
  const percentage = parseInt((uploading.loaded / uploading.total) * 100);

  return (
    <Wrapper>
      <Card>
        <Title>{CARD_TITLE}</Title>
        <DragDrop
          onDragEnter={dragEnter}
          onDragOver={handleDragOver}
          onDrop={Handledrop}
        >
          <Paragraph>{DRAG_DROP_TITLE}</Paragraph>
          <FileUploadBtn
            onClick={() => inputRef.current.click()}>
            {SELECT_BUTTON}
          </FileUploadBtn>
          <InputFile
            type="file"
            name="file"
            ref={inputRef}
            onChange={(e) => {
              handleFiles(Array.from(e.target.files));
              inputRef.current.value = null;
            }}
          />
        </DragDrop>
        {/* Uploading progress bar and file preview */}
        {!!title ? (
          <Downloading>
            {uploading.done ? <CrossButton onClick={() => handleCrossButton()} /> : null}
            <ContentFile>
              <ContentIcon src={require("../../assets/Images/logo2.jpeg")} />
              <ContentTitle>
                <Text>
                  {title}
                </Text>
                <ProgressBar>
                  <div style={{ ...progressLine, width: `${ percentage }%`, backgroundColor: 'red', height: '10px' }} />
                </ProgressBar>
                <SizePercentage>
                  <Text>
                    {uploading.done ? `${ total }MB` : `${ loaded || 0.2 } of ${ total || 2.0 }MB`}
                  </Text>
                  {!uploading.done ? (
                    <Text> {`${ percentage || 0 }%`} </Text>
                  ) : <Text />}
                </SizePercentage>
              </ContentTitle>
            </ContentFile>
          </Downloading>
        ) : null}
        <QrGenerateButton>
          <Button
            variant="contained"
            disableElevation
            color="success"
            onClick={() => handleQrGenerate(qrCodeObj)}
          >
            {GENERATE_QR_CODE}
          </Button>
        </QrGenerateButton>
        {/* <div>
          <p>Remaining Time: {reaminingTime}</p>
          {console.log(reaminingTime)}
        </div> */}
      </Card>

    </Wrapper>
  );
}

export default Upload;