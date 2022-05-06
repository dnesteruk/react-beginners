import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/pages/Main';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (  
      <div className="App container">
        <Header slogan='Header component' />
        <Main name='Dmitry' />
        <div className="h2 counter-time">Counter: {counter} times</div>
        <div className="row wraper-button">
          <div className="col-md-6 my-2 increment-counter"><Button onClick={() => setCounter(counter + 1)} text="Increase counter" /></div>
          <div className="col-md-6 my-2 decrement-counter"><Button onClick={() => setCounter(counter - 1)} text="Decrement counter" /></div>
        </div>
        <Footer copyright='&copy; Copyright 2022. All rights are reserved. ' />
    </div>
  );
};

export default App;
