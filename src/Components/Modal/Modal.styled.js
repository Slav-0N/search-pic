import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Modalll = styled.div`
  max-width: calc(70vw - 20px);
  max-height: calc(70vh - 20px);
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
