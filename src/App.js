import {useEffect, useState} from "react"
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
import Quote from "./components/quote/quote.component";
import './App.css';

function App(){
    const [searchField, setSearchField] = useState('')
    const [characters, setCharacters] =  useState([])
    const [filteredCharacters, setFilteredCharacters] = useState(characters)
  
    async function getCharacters(){
      const response = await fetch("https://thronesapi.com/api/v2/Characters")
      const data = await response.json()
      setCharacters(data)
    }
    
    useEffect(()=> {
      getCharacters() 
    }, [])
    
    useEffect(() => {
      const newfilteredCharacters = characters.filter(character => {
          return character.fullName.toLocaleLowerCase().includes(searchField)
      })        
      setFilteredCharacters(newfilteredCharacters)
    }, [characters, searchField])

  
    return (
      <div className="App">
        <div className="header"></div>
        <SearchBar setSearchField={setSearchField} />
        <Quote />
        <CardList characters={filteredCharacters}/>    
      </div>
    )
  
}

export default App;

