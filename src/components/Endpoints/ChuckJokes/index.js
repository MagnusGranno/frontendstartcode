import React, { useState, useEffect } from 'react';

//url
import { chuckURL } from '../../../settings';
// styles
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
    // console.log(JSON.stringify(myJoke.value));

    setJokes([...jokes, myJoke.value]);
    // allJokes.push(myJoke.value);
  };

  const getMeMyJokes = async () => {
    fetchJokes(URL);
    console.log(jokes);
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
