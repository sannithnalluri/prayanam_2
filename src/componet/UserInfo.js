import React from 'react';
import { useState, useEffect } from 'react';
import UserDetailPage from './UserDeatilsScreen';
import Userlogin from './Userlogin';

const UserInfo = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setLogin(true);
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const islogin = () => {
    setLogin(true);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setLogin(false);
    setUser({});
    localStorage.removeItem('user');
  };

  const handleUserdata = (email) => {
    setUser(email);
    console.log('Received email:', email);
  };
  console.log(login);
  return (
    <div>
      {login ? (
        <UserDetailPage userEmail={user} logout={logout} />):(<Userlogin userdata={handleUserdata} login={islogin} />)}
    </div>
  );
};

export default UserInfo;
