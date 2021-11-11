import React, { useState, useEffect } from 'react';

// Styles
import { Content, Wrapper } from './Home.styles';

// Facade
import { facade } from '../../apiFacade';

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState('Loading...');

  useEffect(() => {
    facade
      .fetchData()
      .then((data) => setDataFromServer(data.msg))
      .catch((error) => {
        console.log(error);
      });
  }, [dataFromServer]);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <Content>
        <h1>Home page</h1>
        <h3>Login to begin</h3>
        {loggedIn && <LoggedIn />}
      </Content>
    </Wrapper>
  );
}

export default Home;
