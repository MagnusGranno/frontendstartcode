import React, { useState } from 'react';
// Facade
import { facade } from '../../apiFacade';
// Styles
import {
  Wrapper,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
} from './Login.styles';

// Router
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn, loginCredentials, setLoginCredentials }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const perfomLogin = (e) => {
    e.preventDefault();
    setError('');
    for (let key in loginCredentials) {
      if (loginCredentials[key] === '') {
        setError(`${key} skal være udfyldt`);
        return;
      }
    }

    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      navigate('/');
    });

    localStorage.setItem('username', user);
  };

  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm>
          <StyledInput
            placeholder="User Name"
            id="username"
            onChange={onChange}
          />
          <StyledInput
            placeholder="Password"
            id="password"
            onChange={onChange}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton onClick={perfomLogin}>Login</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
};

export default Login;
