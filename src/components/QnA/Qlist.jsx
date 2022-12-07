import React from 'react';
import styled from 'styled-components';
import More from './More.jsx';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import ModalTemplate from './comps/ModalTemplate.jsx';

const Spacer = styled.div`
  margin: 0 0 10px 0;
`;

function Qlist({ queList }) {
  const { visible, toggle } = useModal();

  const [height, setHeight] = React.useState('0px');

  const [showAccordion, setShowAccordion] = React.useState(false);

  const content = React.useRef(null);

  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      toggle={toggle}
      key={question.question_id}
    />
  ));

  function toggleAccordion() {
    setHeight(height !== '0px' ? '0px' : `${content.current.scrollHeight}px`);
    setShowAccordion(!showAccordion);
  }

  return (
    <div>
      <Spacer>
        <Comp>
          { mappedList.length > 2 ? mappedList.slice(0, 2) : mappedList }
          { mappedList.length > 2 ? (
            <div
              className="questionlisthidden"
              ref={content}
              style={{ maxHeight: height }}
            >
              { mappedList.slice(2) }
            </div>
          ) : null }
          <Modal visible={visible} toggle={toggle}>
            {/* Modal renders its children, so place content between tags */}
            <ModalTemplate />
          </Modal>
        </Comp>
      </Spacer>
      <More
        queList={queList}
        toggleAccordion={() => toggleAccordion()}
        showAccordion={showAccordion}
      />
    </div>
  );
}

export default Qlist;
