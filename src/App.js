import Joke from './components/Joke'
import SavedJokes from './components/SavedJokes'
import React, { useState, useEffect } from 'react'

function App() {

  const [joke, setJoke] = useState('')
  const [saved, setSaved] = useState([])

  useEffect(() => getJoke(), [])

  function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        console.log(data.value)
        setJoke(data.value)
      })
  }

  function save() {
      if(!saved.includes(joke)) {
        let data = [...saved, joke]
        setSaved(data)
      }
  }

  function remove(index) {
    let data = [...saved]
    data.splice(index, 1)
    setSaved(data)
  }

  return (
    <div>
      <h1>Chuck Norris Jokes</h1> 
      <button onClick={getJoke}>Get Joke</button> 
      <button onClick={save}>Save</button>
      <Joke joke={joke} />
      <SavedJokes jokes={saved} callback={remove} />
    </div>
  );
}

export default App;
