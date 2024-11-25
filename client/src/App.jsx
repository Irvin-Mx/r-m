import "./App.css";
//Hooks
import { useState } from "react";

import axios from "axios"

//Components
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";

//Component
function App() {
  //States
  const [characters,setCharacters] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  //Search for a rick and morty character from API
  async function onSearch(id){
    const URL = "https://rickandmortyapi.com/api/character/" + String(id)

    try {
      if(characters.length===0) {
        setIsLoading(!isLoading)
      }

      //This function should add a obj to  characters array
      const {data} = await axios(URL)
      setCharacters([...characters,data])

    } catch (error) {
      console.log(error)
    }
    
  }

  if(characters.length===0) {
    setIsLoading(!isLoading)
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
