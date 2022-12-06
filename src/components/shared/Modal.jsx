import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Overlay to dim content on the DOM
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

// Wrapper for modal, z-index is higher than Overlay so it displays on top of it
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

// we can adjust this stuff as needed
const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  margin: 1.75rem auto;
  max-width: 800px;
  padding: 2rem;
`;

// place button on the right, can be styled better later
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function Modal({ visible, toggle, children }) {
  // only render if visible is true
  if (visible) {
    // prevent scrolling
    document.body.style.overflow = 'hidden';
    // eslint-disable-next-line function-paren-newline
    return ReactDOM.createPortal(
      <>
        <Overlay />
        <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
          <ModalContainer>
            <Header>
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Header>
            {/* Render children onto the modal */}
            {children}
          </ModalContainer>
        </Wrapper>
      </>, document.body);
  }

  // re-enable scrolling when modal is hidden
  document.body.style.overflow = 'unset';
}
