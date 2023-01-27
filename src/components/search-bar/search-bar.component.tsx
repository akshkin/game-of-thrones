import { ChangeEventHandler } from "react"
import "./search-bar.styles.css"

type SearchBarProps = {
  className: string;
  placeholder? : string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar({
  className,
  placeholder,
  handleChange,
}: SearchBarProps){    
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