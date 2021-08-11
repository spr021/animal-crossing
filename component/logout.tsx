import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId ='1035148078377-tm3gp8qc8r60t1q5sj5i4gsdrv4f9ck8.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        // custom buuton
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
        // )}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;