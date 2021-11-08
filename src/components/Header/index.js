import React from 'react';
import { NavLink } from 'react-router-dom';
// Facade
import { facade } from '../../apiFacade';
// Styles
import {
  Wrapper,
  Content,
  Menu,
  StyledLogout,
  StyledToggle,
} from './Header.styles';

//image
import star from '../../images/star.png';

function Header({
  loggedIn,
  setLoggedIn,
  loginCredentials,
  setLoginCredentials,
  setToggleSideBar,
  toggleSideBar,
  myRoles,
}) {
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: '', password: '' });
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
  };

  return (
    <Wrapper>
      <Content>
        <h1>StartCode</h1>
        {loggedIn && (
          <h3>
            🔥 Welcome {localStorage.username} your roles: {myRoles}🔥
          </h3>
        )}
        <Menu>
          <NavLink to="/">Home</NavLink>
          {!loggedIn ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
          <StyledToggle onClick={() => setToggleSideBar(!toggleSideBar)}>
            <img src={star} alt="star" />
          </StyledToggle>
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;
