import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: hsl(var(--primary-color));
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #4caf50;
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
  align-items: center;
  font-size: var(--fs-500);
  font-weight: 800;
`;

export const StyledLogout = styled.div`
  cursor: pointer;
  text-align: center;
  justify-content: center;
`;

export const StyledToggle = styled.div`
  background-color: hsl(167, 63%, 45%, 0.2);
  height: 75%;
  width: 75%;
  color: black;
  cursor: pointer;
  font-size: var(--fs-300);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  img {
    width: 90%;
    height: 90%;
  }
`;
