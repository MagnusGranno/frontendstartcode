import React from 'react';

// Routing
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content, Navs } from './SideBar.styles';

function SideBar() {
  return (
    <Wrapper>
      <Content>
        <h2>EndPoints</h2>
        <Link to="/first">
          <Navs>First Endpoint</Navs>
        </Link>
        <Link to="/users">
          <Navs>Users</Navs>
        </Link>
        <Link to="/chuck">
          <Navs>Chuck Norris Jokes</Navs>
        </Link>
        <Link to="/fourth">
          <Navs>Fourth Endpoint</Navs>
        </Link>
        <Link to="/fifth">
          <Navs>Fifth Endpoint</Navs>
        </Link>
      </Content>
    </Wrapper>
  );
}

export default SideBar;
