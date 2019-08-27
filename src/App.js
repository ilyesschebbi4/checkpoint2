import React from 'react';
import logo from './img/avatar.jpg';
import './test.css';

function App() {
  return (
    <div style={{ maxWidth:'100vw'}}>

	  <h1 className="title" className="red" >My title</h1>

	<br/>

<img style={{width:'250px'}} src={logo} />

<br/>

	<img style={{width:'250px'}} src="/avatar1.png" />

</div>
  );
}

export default App;
