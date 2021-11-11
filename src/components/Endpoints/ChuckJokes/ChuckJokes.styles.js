import styled from 'styled-components';

export const MyBody = styled.div`
  margin-left: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    justify-self: flex-start;
  }
  li {
    margin: 3px 10px;
    font-size: var(--fs-400);
  }
  line-height: 1.5;
  h2 {
    margin: 20px 0;
    text-align: center;
    color: hsl(var(--secondary-color));
    font-size: var(--fs-700);
    text-shadow: 1px 1px #000;
  }
`;

export const JokeButton = styled.button`
  background-color: hsl(var(--secondary-color));
  background-color: ${(props) => props.color};
  padding: 20px 25px;
  margin: 20px 20px;
  border-radius: 6px;
  border: 1px solid black;
  font-size: var(--fs-600);
`;
