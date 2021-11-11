import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: hsl(var(--primary-color));
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 5;
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
    color: hsl(var(--secondary-color));
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
