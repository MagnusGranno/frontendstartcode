import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Navs } from './SideBar.styles';
function SideBar() {
  return (
    <Wrapper>
      <h2>EndPoints</h2>
      <Content>
        <Link to="/first">
          <Navs>First Endpoint</Navs>
        </Link>
        <Link to="/second">
          <Navs>Second Endpoint</Navs>
        </Link>
        <Link to="/third">
          <Navs>Third Endpoint</Navs>
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
