import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import './App.css';

const Home = () => {
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();
  const [userkey, setuserKey] = useState('');

  useEffect(() => {
    const key = localStorage.getItem('okta-token-storage');
    setuserKey(JSON.parse(key)?.accessToken?.accessToken);
  }, [localStorage.getItem('okta-token-storage')]);

  if (!authState) return null;

  const login = async () => navigate('/login');

  const logout = async () => {
    oktaAuth.tokenManager.clear();
  };

  const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button>
    :
    <button onClick={login}>Login</button>;

  return (
    <div>
      <Link to='/'>Home</Link><br />
      {button}
      {userkey ?
        <div className='token'>
          <button onClick={() => { navigator.clipboard.writeText(userkey) }}>Copy token</button>
          {userkey}
        </div>

        : null}
    </div>
  );
};
export default Home;
