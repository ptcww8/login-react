// return the user data from the session storage
export const getUser = () => {
  return sessionStorage.getItem('user') || null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// return the token from the session storage
export const getClient = () => {
  return sessionStorage.getItem('client') || null;
}



// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('client');
}

// set the token and user from the session storage
export const setUserSession = (token, user, client) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('client', client);
  sessionStorage.setItem('user', user);
  
}