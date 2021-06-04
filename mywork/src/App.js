import React, {useState, useEffect} from 'react';
import './App.css';
import Characters from './components/Characters';
import styled from 'styled-components';
import axios from 'axios';


const App = () => {
  
  const [people, setPeople] = useState([])

  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/`)
    .then((res) =>{
      setPeople(res.data.results)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [] )


  return (
    <StyledApp>
    <div className="App">
      <h1 className="Header">Characters</h1>
      {people.map((elem) => {
        return <Characters key = {elem.id} people = {elem} />
      })}
    </div>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
body {
  color : red;
}
`