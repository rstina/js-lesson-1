import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import MyRules from './components/MyRules';
import MyList from './components/MyList';
import MyHeading from './components/MyHeading';
import MyImg from './components/MyImg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeading heading="LOTR" />
        <MyImg src="ring.png" />
        <MyRules/>
        <MyList item1="Three Rings for the Elves" 
        item2="Seven for the Dwarves" 
        item3="Nine for Men"
        item4="One for the Dark Lord"/>
        <MyButton title="RVSP to Bilbo's B-day"/>

      </header>
    </div>
  );
}

export default App;
