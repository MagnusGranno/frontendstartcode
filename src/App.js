import { useState, useEffect } from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import First from './components/Endpoints/First';
import Home from './components/Home';
import Login from './components/Login';
import SideBar from './components/SideBar';
import UserEndPoint from './components/Endpoints/UserEndPoint';
import ChuckJokes from './components/Endpoints/ChuckJokes';
// Styles
import { GlobalStyle } from './GlobalStyle';

// Facade
import { facade } from './apiFacade';

function App() {
  const initialState = {
    username: '',
    password: '',
  };
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
      />
      {loggedIn && <SideBar />}
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/first" element={<First title={'First'} />} />
        <Route path="/users" element={<UserEndPoint />} />
        <Route path="/chuck" element={<ChuckJokes />} />
        <Route path="/fourth" element={<First title={'Fourth'} />} />
        <Route path="/fifth" element={<First title={'Fifth'} />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
