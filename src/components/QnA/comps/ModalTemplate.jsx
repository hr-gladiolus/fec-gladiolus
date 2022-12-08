import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../styles/FlexColumn.styled';

const OuterFlexColumn = styled.div`
  display: block;
  margin-left: 50%;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
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

const FirstInput = styled.input.attrs({ maxLength: '1000', required: 'required' })`
padding: 0 0 15px 0;
`;

const SecondInput = styled.input.attrs({ maxLength: '60', required: 'required' })`
padding: 0 0 15px 0;
`;

const ThirdInput = styled.input.attrs({ maxLength: '60', required: 'required', type: 'email' })`
  padding: 0 0 15px 0;
`;

const SubmitModal = styled.button`

`;

const SixtyCharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  position: absolute;
  bottom: 10%;
  right 10%;
`;

const ThousandCharsParagraph = styled.p`
  opacity: 50%;
  color: black;
  position: absolute;
  bottom: 10%;
  right 10%;
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
  const [firstValue, setFirstValue] = React.useState('');

  const [secondValue, setSecondValue] = React.useState('');

  const [thirdValue, setThirdValue] = React.useState('');

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
        <FlexColumn>
          <ModalTitle>{title}</ModalTitle>
          <ModalSubtitle>{subtitle}</ModalSubtitle>
        </FlexColumn>
        <FlexColumn>
          <FlexForm>
            <Label>
              {firstInputLabel}
              <ThousandCharsParagraph>
                Characters left:
                {' '}
                {1000 - firstValue.length}
              </ThousandCharsParagraph>
              <FirstInput placeholder={firstInputName} onChange={firstChange} />
            </Label>
            <Label>
              What is your nickname?
              <SixtyCharsParagraph>
                Characters left:
                {' '}
                {60 - secondValue.length}
              </SixtyCharsParagraph>
              <SecondInput placeholder={secondInputName} onChange={secondChange} />
              {secondInputText}
            </Label>
            <Label>
              What is your email?
              <SixtyCharsParagraph>
                Characters left:
                {' '}
                {60 - thirdValue.length}
              </SixtyCharsParagraph>
              <ThirdInput placeholder={thirdInputName} onChange={thirdChange} />
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
