import React, { useState, useEffect } from 'react';
// import {Card} from 'react-bootstrap';

// Url
// import { fiveServers } from '../../../settings';

// Facade
// import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container, Row } from './First.styles';


// const Cards = ({data}) => {
//   return(
//     <Card body>
//       <h4 key={data.id}>{data.title}</h4>
//     </Card>  
    
//   )
// }


function First({ title }) {
  
  const [dataFromServer, setDataFromServer] = useState([]);
  
  const fetchUsers = async (URL) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const myUsers = await response.json();
    console.log(myUsers);
    setDataFromServer(myUsers);
  };
  
  useEffect(() => {
    fetchUsers('http://localhost:8080/startcode_security_backend_war_exploded/api/reddit/popular');
  }, []);
  
  return (<>
    <MyBody>
      <Container>
          <Row>
            {dataFromServer.length > 0 && dataFromServer.map((x,i) => (<>
              
              <h4>{x.data.title}</h4>
            </>))}
          </Row>
      </Container>
    </MyBody>
  </>);
}

export default First;
