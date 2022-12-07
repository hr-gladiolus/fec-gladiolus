import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../styles/FlexColumn.styled';

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
`;

const FirstInput = styled.input`

`;

const SecondInput = styled.input`

`;

const ThirdInput = styled.input`

`;

const SubmitModal = styled.button`

`;

function ModalTemplate({
  title, subtitle, firstInputLabel, firstInputName, secondInputName, thirdInputName, buttonName,
}) {
  return (
    <FlexColumn>
      <FlexColumn>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
      </FlexColumn>
      <FlexColumn>
        <FlexForm>
          <Label>
            {firstInputLabel}
            <FirstInput placeholder={firstInputName} />
          </Label>
          <Label>
            What is your nickname?
            <SecondInput placeholder={secondInputName} />
          </Label>
          <Label>
            What is your email?
            <ThirdInput placeholder={thirdInputName} />
          </Label>
          <SubmitModal>{buttonName}</SubmitModal>
        </FlexForm>
      </FlexColumn>
    </FlexColumn>
  );
}

export default ModalTemplate;
