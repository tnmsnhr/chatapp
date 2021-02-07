import './css/main.css';
import React, { Component, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Chatscreen from './components/Chatscreen/Chatscreen';
import Avatar from './components/Avatar/Avatar';
import UserContext from './context/user.context';
import defaultAvatar from './images/default-avatar.svg';

const App=()=>{

  const [user,setUser]=useState({name:'',avatar:defaultAvatar})

  let routes=(
    <UserContext.Provider value={[user,setUser]}>
      <Route path="/" exact component={Login}/>
    </UserContext.Provider>
  )

  if(user.name.length>0){
    routes=(
      <UserContext.Provider value={[user,setUser]}>
          <Route path="/" exact component={Login}/>
          <Route path="/choose-avatar"  component={Login}/>
          <Route path="/choose-avatar"  component={Avatar}/>
          <Route path="/chat" component={Chatscreen}/>
      </UserContext.Provider>
    )
  }
  
    return (
      <>
        {routes}
      </>
    );
}

export default App;
