import React from 'react';
import { GoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId ='1035148078377-tm3gp8qc8r60t1q5sj5i4gsdrv4f9ck8.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        // custom buuton
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
        // )}
      />
    </div>
  );
}

export default Login;