import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 200px;
  background-color: hsl(var(--primary-color));
  z-index: 10;
  position: absolute;
  top: 100px;
  left: 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  color: #fff;
`;
