import styled, { css } from 'styled-components';
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledButton = styled.button`
  display: block;
  background-color: hsl(var(--primary-color));
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    background-color: hsl(var(--primary-color), 0.8);
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
