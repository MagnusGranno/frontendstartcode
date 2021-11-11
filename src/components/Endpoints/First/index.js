import React, { useState, useEffect } from 'react';

// Url
import { fiveServers } from '../../../settings';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container } from './First.styles';

function First({ title }) {
  const [dataFromServer, setDataFromServer] = useState([
    { value: '', url: '' },
  ]);
  useEffect(() => {
    facade
      .fetchAny(fiveServers)
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
      </Container>
    </MyBody>
  );
}

export default First;
