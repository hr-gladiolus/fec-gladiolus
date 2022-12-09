import React, { useState } from 'react';
import styled from 'styled-components';
import FlexColumn from '../styles/FlexColumn.styled';

const OuterFlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: none;
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

`;

const CharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  position: absolute;
  bottom: ${({ bottom }) => bottom}%;
  right 0.5%;
`;

const ThousandCharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  display: flex;
  place-content: end;
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
}) {
  const [firstValue, setFirstValue] = useState('');

  const [secondValue, setSecondValue] = useState('');

  const [thirdValue, setThirdValue] = useState('');

  function firstChange(e) {
    setFirstValue(e.target.value);
  }

  function secondChange(e) {
    setSecondValue(e.target.value);
  }

  function thirdChange(e) {
    setThirdValue(e.target.value);
  }

  function handleSubmitModal(e) {
    e.preventDefault();
    console.log('submitting modal with the values:');
    console.log('Question value, ', firstValue);
    console.log('Nickname value, ', secondValue);
    console.log('Email value, ', thirdValue);
  }

  return (
    <OuterFlexColumn>
      <FlexColumn>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        <FlexColumn>
          <FlexForm>
            <Label>
              {firstInputLabel}
              <FirstInput placeholder={firstInputName} onChange={firstChange} />
              <ThousandCharsParagraph>
                Characters left:
                {' '}
                {1000 - firstValue.length}
              </ThousandCharsParagraph>
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
            <SubmitModal onClick={handleSubmitModal}>{buttonName}</SubmitModal>
          </FlexForm>
        </FlexColumn>
      </FlexColumn>
    </OuterFlexColumn>
  );
}

export default ModalTemplate;
