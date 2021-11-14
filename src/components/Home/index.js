import React, { useState, useEffect } from "react";

// Styles
import { Content, Wrapper } from "./Home.styles";
import text from "./text.css";
// Facade
import { facade } from "../../apiFacade";

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

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
        <br />
        <br />
        <h3>About this Project </h3>
        <p>
          For this CA I used our Backend to fetch an API access token from
          Spotify's API.<br />
          Once the access Token has been fetched, I fetch it in my frontend
          through an API call to the endpoint I created in our backend. <br />I
          then use the access token to fetch playlists and songs from spotify
          through my frontend. <br />I chose to use the frontend for the
          remaining API calls since it was easier to work with React <br /> and
          it made it possible for me to make a more dynamic experience
        </p>
      </Content>
    </Wrapper>
  );
}

export default Home;
