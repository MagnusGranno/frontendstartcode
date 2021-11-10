import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 200px;
  background-color: hsl(var(--primary-color));
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 100px;
  left: 0;
  h2 {
    color: hsl(var(--secondary-color));
    font-size: var(--fs-600);
  }
`;

export const Content = styled.ul`
  width: 100%;
  height: 100%;

  color: #fff;
`;
export const Navs = styled.li`
  width: 100%;
  padding: 2rem;
  cursor: pointer;
  font-size: var(--fs-400);

  a {
    text-decoration: none;
    color: white;
    padding: 0;
  }

  :hover {
    background-color: hsl(var(--secondary-color));

    a {
      color: #fff;
      text-decoration: underline 0.15em;
      text-underline-offset: 0.2em;
    }
  }
  @media (max-width: 1000px) {
    font-size: var(--fontMed);
  }
`;
