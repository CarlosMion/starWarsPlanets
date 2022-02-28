import styled from 'styled-components';

import { DialogOverlay } from '@reach/dialog';

export const CloseButton = styled.button`
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 3rem;
  width: 3rem;

  :hover {
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2.25rem;
    transform: translate(-50%, -50%);
    fill: 'black';
  }
`;

export const ModalContainer = styled(DialogOverlay)`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-content: center;
  [data-reach-dialog-content] {
    background: white;
    border-radius: 8px;
    position: relative;
    margin: auto;
  }
`;

export const InnerContent = styled.div`
  padding: 3rem 3rem 1.5rem 3rem;
  max-width: 90vw;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Heading = styled.h2`
  text-align: center;
  line-height: 1.15;
  max-width: 30rem;
  margin: 0 auto;
`;

export const Body = styled.p`
  text-align: center;
`;
