import { myUrl } from './settings';

const URL = myUrl;
function handleHtttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }

  return res.json();
}
function apiFacade() {
  const login = (user, password) => {
    const options = makeOptions('POST', true, {
      username: user,
      password: password,
    });

    return fetch(URL + '/api/login', options)
      .then(handleHtttpErrors)
      .then((res) => {
        setToken(res.token);
        localStorage.setItem('username', user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchData = () => {
    const options = makeOptions('GET', true);
    return fetch(URL + `/api/info/user`, options).then(handleHtttpErrors);
  };
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token);

    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const roles = decodedJwtData.roles;
    localStorage.setItem('roles', JSON.stringify(roles));
  };
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };
  const loggedIn = () => {
    const loggedIn = getToken() !== null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
  };

  const makeOptions = (method, addToken, body) => {
    let opts = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    };
    if (addToken && loggedIn()) {
      opts.headers['x-access-token'] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    handleHtttpErrors,
  };
}
export const facade = apiFacade();
