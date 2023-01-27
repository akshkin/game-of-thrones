import {useEffect, useState, ChangeEvent} from "react"
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";

import { getData } from "./utils/fetch.utils.data";
import './App.css';
import Quote from "./components/quote/quote.component";

export type Character = {
  id: string;
  imageUrl: string;
  fullName: string;
  title: string;
  family: string;
}


function App(){
  const [searchField, setSearchField] = useState('')
  const [characters, setCharacters] =  useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  
  useEffect(()=> { 
    const fetchCharacters = async () => {
      const characs = await getData<Character[]>("https://thronesapi.com/api/v2/Characters")
      setCharacters(characs)
    }
    fetchCharacters()
  }, [])

  useEffect(() => {
    const newfilteredCharacters = characters.filter(character => {
      return character.fullName.toLocaleLowerCase().includes(searchField)
    })
    setFilteredCharacters(newfilteredCharacters)
  }, [characters, searchField])

  function handleChange(event: ChangeEvent<HTMLInputElement>):void {
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
        <Quote />
        <CardList characters={filteredCharacters}/>    
      </div>
    )
  
}

export default App;

