import React from 'react'
import Menu from './Menu.jsx';
import {LoginButton} from '../components/Login';
import {LogoutButton} from '../components/Logout';
import Login from './Login.jsx';

import { useAuth0 } from '@auth0/auth0-react';

/* import {Profile} from './componentes/Profile'; */

const Index = () => {
    const {isAuthenticated} = useAuth0();
    return <>
    <header className="App-header">
        
    {isAuthenticated ? (
    <>

      <LogoutButton/>
      <Menu/>
    
    </>
    ):(
        <Login></Login>
    
    )}
    
    {/* <Profile>

    </Profile> */}

    {/* <RegistroUsuario>

</RegistroUsuario> */}


  </header>  
  </>;

    
    
};

export default Index;





