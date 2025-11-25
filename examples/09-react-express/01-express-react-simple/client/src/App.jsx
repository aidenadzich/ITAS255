import './assets/App.css';
import Home from './Components/Home';
import List from './Components/List';
import Form from './Components/Form';
import { useState } from 'react';

function App() {


  return ( 
    <div className="App">
      <Home />
      <List />
      <Form />
    </div>
  );
}

export default App;
