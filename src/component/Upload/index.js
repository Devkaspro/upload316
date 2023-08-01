import React, { useRef, useState } from 'react';
import { Card, ContentFile, ContentIcon, ContentTitle, CrossButton, Downloading, DragDrop, FileUploadBtn, InputFile, Paragraph, ProgressBar, QrGenerateButton, SizePercentage, Text, Title, Wrapper, progressLine } from './style';
import { CARD_TITLE, DRAG_DROP_TITLE, GENERATE_QR_CODE, SELECT_BUTTON } from '../../constants/constant';
import { convertToMB } from '../../Helpers/helper';
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
    setUploading((data) => ({
      ...data, title: file[0].name
    }));
    var data = new FormData();
    console.log("File-name", file[0].name);
    data.append("file", file[0], file[0].name);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4)
      // alert(`Server Response ${ xhr.status }`);
      {
        console.log(this.responseText);
        setQrCodeObj(this.responseText);
        setUploading((data) => ({
          ...data, content: this.responceText, done: true
        }));
      }
    });

    xhr.open("POST", "http://localhost:5001/upload");
    xhr.upload.onprogress = (event) => {
      setUploading((data) => ({ ...data, loaded: event.loaded, total: event.total }));
    };
    xhr.send(data);


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
              <ContentIcon src={require("../../assets/Images/jpg.png")} />
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
      </Card>

    </Wrapper>
  );
}

export default Upload;