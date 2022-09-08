import {useEffect, useState} from "react"
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
import './App.css';

function App(){
  const [searchField, setSearchField] = useState('')
  const [characters, setCharacters] =  useState([])
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  const [quote, setQuote] = useState('')

  useEffect(()=> {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))  
}, [])

  useEffect(() => {
    const newfilteredCharacters = characters.filter(character => {
      return character.fullName.toLocaleLowerCase().includes(searchField)
    })
    setFilteredCharacters(newfilteredCharacters)
  }, [characters, searchField])

  useEffect(() => {  
      fetch("https://api.gameofthronesquotes.xyz/v1/random")
        .then(response => response.json())
        .then(data => setQuote(data))
    
  }, [])

  function handleChange(event){
    const searchFieldString = event.target.value.toLocaleLowerCase() 
    setSearchField(searchFieldString)
  }

    return (
      <div className="App">
        <div className="header"></div>
        <SearchBar 
          className="character-search-bar" 
          placeholder="search characters" 
          handleChange={handleChange}
        />
        <div className="quote-container">
          <blockquote className="quote">"{quote.sentence}"</blockquote>
          {/* {<cite className="quote-cite">-{quote.character.name}</cite>} */}
        </div>
        <CardList characters={filteredCharacters}/>    
      </div>
    )
  
}

export default App;

