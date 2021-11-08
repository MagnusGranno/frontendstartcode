// Hooks
import { useState, useEffect } from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
// Styles
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import SideBar from './components/SideBar';

const initialState = {
  username: '',
  password: '',
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState(initialState);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [myRoles, setMyRoles] = useState('');

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setLoggedIn(true);

      const jwt = localStorage.getItem('jwtToken');
      const jwtData = jwt.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);

      const roles = decodedJwtData.roles;
      localStorage.setItem('roles', JSON.stringify(roles));
      setMyRoles(localStorage.getItem('roles').split(',').join(', '));
    }
  }, [loggedIn]);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
        myRoles={myRoles}
      />
      {toggleSideBar && <SideBar />}
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
