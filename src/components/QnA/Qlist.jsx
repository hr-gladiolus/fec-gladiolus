import React from 'react';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import ModalTemplate from './comps/ModalTemplate.jsx';

function Qlist({ queList }) {
  const { visible, toggle } = useModal();
  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      toggle={toggle}
      key={question.question_id}
    />
  ));
  return (
    <Comp>
      { mappedList }
      <Modal visible={visible} toggle={toggle}>
        {/* Modal renders its children, so place content between tags */}
        <ModalTemplate />
      </Modal>
    </Comp>
  );
}

export default Qlist;
