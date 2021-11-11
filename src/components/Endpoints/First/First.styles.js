import styled from 'styled-components';

export const MyBody = styled.div`
  margin-left: 200px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

export const Row = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 24% [col]);
  
  h4{
    background-color: hsl(4, 0%, 95%);
  }
  
`;
