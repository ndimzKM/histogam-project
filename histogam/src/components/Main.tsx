import * as React from 'react';
import { useState, useEffect } from 'react';

import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

import Home from '../pages/Home';
import Register from '../auth/Register'
import Login from '../auth/Login';

const Main = () => {
      const [user, setUser] = useState<any>(null);
  const [authState , setAuthState] = useState<any>(null);
 
     useEffect(() => {
    const unSubscribeAuth= onAuthStateChanged(auth,
       async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login'); // or 'register' 
        } })
        return unSubscribeAuth();

      
      }, [user]);

          
      if(authState === 'null') return <div className='font-bold text-center text-5xl'>Loading...</div>
        
      if(authState === 'login') return <Login {...setAuthState} {...setUser}/>
      if(authState === 'register') return <Register {...setAuthState} {...setUser} />
        
    if(user){
        return <Home {...setAuthState}/>

    }
        
  return (

  
      <Register />
      
  )
}

export default Main;
