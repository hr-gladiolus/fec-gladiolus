import React, { useState } from 'react';
import styled from 'styled-components';
import FlexColumn from '../styles/FlexColumn.styled';
import { submitQorA } from '../requestHelpers';

const OuterFlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 407px;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: none;
  place-content: center;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalSubtitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ margin }) => margin || '15px'};
`;

const FirstInput = styled.textarea.attrs({ maxLength: '1000', required: 'required' })`
display: block;
padding: 0 0 15px 0;
width: 100%;
overflow: auto;
height: 65px;
line-height: 1.2;
`;

const SecondInput = styled.input.attrs({ maxLength: '60', required: 'required' })`
padding: 0 0 15px 0;
`;

const SubmitModal = styled.button`
  width: fit-content;
  margin: auto;
`;

const CharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  right 0.5%;
`;

const ThousandCharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  display: flex;
  place-content: end;
`;

const PhotoInput = styled.textarea`
display: block;
padding: 0 0 15px 0;
width: 100%;
overflow: auto;
height: 65px;
line-height: 1.2;
`;

const SinglePhoto = styled.img`
  max-width: 110px;
  max-height: 110px;
  margin: 7px 10px 0px 10px;
`;

const DisplayPhotos = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 409px;
  flex-wrap: wrap;
  margin-bottom: 15px;
  place-content: center;
`;

function ModalTemplate({
  title, subtitle,
  firstInputLabel,
  firstInputName,
  secondInputName,
  thirdInputName,
  buttonName,
  secondInputText,
  thirdInputText,
  isQuestion,
  identification,
}) {
  const [firstValue, setFirstValue] = useState('');

  const [secondValue, setSecondValue] = useState('');

  const [thirdValue, setThirdValue] = useState('');

  const [photos, setPhotos] = useState([]);

  const [mappedPhotos, setMappedPhotos] = useState([]);

  function firstChange(e) {
    setFirstValue(e.target.value);
  }

  function secondChange(e) {
    setSecondValue(e.target.value);
  }

  function thirdChange(e) {
    setThirdValue(e.target.value);
  }

  function photoChange(e) {
    setPhotos(e.target.value.split(', '));
    setMappedPhotos(e.target.value.split(', ').map((imgSrc, i) => <SinglePhoto src={imgSrc} />));
    console.log(photos);
  }

  function handleSubmitModal(e) {
    e.preventDefault();
    submitQorA(isQuestion, firstValue, secondValue, thirdValue, identification, photos)
      .then((value) => {
        window.location.reload();
      });
  }

  return (
    <OuterFlexColumn>
      <FlexColumn>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        <FlexColumn>
          <FlexForm onSubmit={handleSubmitModal}>
            <Label margin="5px">
              {firstInputLabel}
              <FirstInput placeholder={firstInputName} onChange={firstChange} />
              <ThousandCharsParagraph>
                Characters left:
                {' '}
                {1000 - firstValue.length}
              </ThousandCharsParagraph>
              <DisplayPhotos>{mappedPhotos}</DisplayPhotos>
            </Label>
            <Label>
              What is your nickname?
              <CharsParagraph bottom="25">
                Characters left:
                {' '}
                {60 - secondValue.length}
              </CharsParagraph>
              <SecondInput placeholder={secondInputName} onChange={secondChange} />
              {secondInputText}
            </Label>
            <Label>
              What is your email?
              <CharsParagraph bottom="26">
                Characters left:
                {' '}
                {60 - thirdValue.length}
              </CharsParagraph>
              <SecondInput placeholder={thirdInputName} type="email" onChange={thirdChange} />
              {thirdInputText}
            </Label>
            {!isQuestion
            && (
              <Label>
                Input the url for any images you would like to submit
                seperated by a comma and a space.
                <PhotoInput placeholder="Example: https://imgsrc.com, https:secondimgsrc.com" onChange={photoChange} />
              </Label>
            )}
            <SubmitModal>{buttonName}</SubmitModal>
          </FlexForm>
        </FlexColumn>
      </FlexColumn>
    </OuterFlexColumn>
  );
}

export default ModalTemplate;
