import "./search-bar.styles.css"

function SearchBar(props){
 
    const {className, placeholder, handleChange} = props
    return (
      <input 
        className={`search-bar ${className}`} 
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}           
        />
        
    )
  
}

export default SearchBar