import React, { useState } from 'react';

// Url
import { chuckURL } from '../../../settings';

// Styles
import { MyBody, JokeButton } from './ChuckJokes.styles';

const ChuckJokes = () => {
  const URL = chuckURL;
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async (URL) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const myJoke = await response.json();

    setJokes([...jokes, myJoke.value]);
  };

  const getMeMyJokes = async () => {
    fetchJokes(URL);
  };

  const resetPage = () => {
    setJokes([]);
  };
  return (
    <MyBody>
      <div>
        <h2>Chuck Norris Jokes</h2>
        <ul>
          {jokes.map((joke) => (
            <li key={Math.floor(Math.random() * 10000)}>{joke}</li>
          ))}
        </ul>
      </div>
      <div>
        <JokeButton onClick={getMeMyJokes}>Get me my jokes</JokeButton>
        <JokeButton onClick={resetPage} color={'red'}>
          Reset Page
        </JokeButton>
      </div>
    </MyBody>
  );
};

export default ChuckJokes;
