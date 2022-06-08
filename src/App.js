import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyInfoComponent />
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
//1. PascalCase -  is a programming naming convention where the first letter of each compound word in a variable is capitalized.
//2. Return Statement With () and single enclosing html element usually <div></div>
//3. Components can be used like html elements


function MyInfoComponent() {
  const [myName, setMyName] = useState('hojong')
  const [favoriteColor, setMyFavoriteColor] = useState('red')
  const [favoriteMovies, setMyFavoriteMovie] = useState(['Avatar' , 'Titanic' , 'Jack Ass'])
  const [myAge, setMyAge] = useState(31);
  return (
    <div>
     <p>{myName}</p>
     <p>my favorite movies are {favoriteMovies[0]}, {favoriteMovies[1]} and {favoriteMovies[2]}</p>
     {/* <p>{favoriteMovies.map((x)=>{
          return (
              <li>
                {x}
              </li>
          )
      })}</p> */}
      <p style={{backgroundColor: favoriteColor}}>{favoriteColor}</p>
      <p>my age is {myAge}</p>

      <button onClick={()=>{
        setMyAge(myAge +1)
      }}>+</button>

      <input text onChange={(event)=>{
        let value = event.target.value
        setMyName(value)
      }}></input>

      <input text onChange={(event)=>{
        let value = event.target.value
        setMyFavoriteColor(value)
      }}></input>

      <input text onChange={(event)=>{
        let value = event.target.value
        setMyFavoriteMovie(value.split(' '))
      }}></input>
    </div>

  )
}

export default App;

{/* {favoriteMovies.map((x)=>{
          return (
              <li>
                {x}
              </li>
          )
      })} */}