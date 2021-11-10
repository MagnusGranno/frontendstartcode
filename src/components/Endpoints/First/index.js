import React, { useState, useEffect } from 'react';
import { jokeUrl } from '../../../settings';
import { facade } from '../../../apiFacade';
// Styles
import { MyBody, Picture, Container } from './First.styles';

function First({ title }) {
  const [dataFromServer, setDataFromServer] = useState([{value: "", url: ""}]);
  useEffect(() => {
    facade
      .fetchAny(jokeUrl)
      .then((data) => setDataFromServer(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <MyBody>
      <div>This is the {title} endpoint 😻 </div>
      <Container>
        <h3>{dataFromServer[0].value}</h3>
        <Picture color={'green'}>Picture 1</Picture>
        <Picture color={'red'}>Picture 2</Picture>
        <Picture color={'Blue'}>Picture 3</Picture>
      </Container>
    </MyBody>
  );
}

export default First;
