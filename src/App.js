import logo from './logo.svg';
import './App.css';
import Plivo from 'plivo-browser-sdk';
import React, { useEffect } from 'react';

function App() {
  const [username, setUsername] = React.useState("zeeshanep786377132714833190002");
  const [password, setPassword] = React.useState("12345");
  useEffect(() => {
    
     
  });

  var options = {
    "debug":"DEBUG",
    "permOnClick":true,
    "enableTracking":true,
    "closeProtection":true,
    "maxAverageBitrate":48000
    };

  let plivoBrowserSdk = new Plivo(options);

  plivoBrowserSdk.client.on('onLogin', onLogin);
  plivoBrowserSdk.client.on('onWebrtcNotSupported', onWebrtcNotSupported);
	plivoBrowserSdk.client.on('onLoginFailed', onLoginFailed);
  

  function login(){
    plivoBrowserSdk.client.login(username, password);
  }

  function onLogin(){
    console.log("Login successfull");
  }

  function onWebrtcNotSupported() {
    console.warn('no webRTC support');
    alert('Webrtc is not supported in this broswer, Please use latest version of chrome/firefox/opera/IE Edge');
  }
  
  function onLoginFailed(reason){
    console.info('onLoginFailed ',reason);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        <button onClick={login}>
          Login with endpoint
        </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
