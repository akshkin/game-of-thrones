import "./search-bar.styles.css"

function SearchBar({ setSearchField }){

    function handleChange(event){
      const searchFieldString = event.target.value.toLocaleLowerCase() 
      setSearchField(searchFieldString)
    }

    return (
      <input 
        className="search-bar character-search-bar"
        role="search"
        type="search" 
        placeholder="search characters" 
        aria-label="Search characters"
        onChange={handleChange}           
        />
        
    )
  
}

export default SearchBar