import * as React from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
import Home from '../src/pages/Home';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'


function App() {

  const [user, setUser] = React.useState<any>(null);
  const [authState , setAuthState] = React.useState<any>(null);
 
     React.useEffect(() => {
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

export default App;
