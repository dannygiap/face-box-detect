import React from 'react';
import './Navigation.css' 

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
      return (
        <nav>
          <ul>
            <li onClick={() => onRouteChange('signout')} className='f3 link dim white pa3 pointer'>Sign Out</li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul>
            <li onClick={() => onRouteChange('signin')} className='f3 link dim white pa3 pointer'>Sign In</li>
            <li onClick={() => onRouteChange('register')} className='f3 link dim white pa3 pointer'>Register</li>
          </ul>
        </nav>
      );
    }
}

export default Navigation;