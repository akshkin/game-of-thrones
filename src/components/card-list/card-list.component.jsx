
import Card from "../card/card.component"

import "./card-list.style.css"

function CardList({characters}){
           
    return (
      <div className="card-list">
        {characters.map(character => {        
        return (
          <Card key={character.id} character={character}/>
          )
      })}
      </div>
   
    )
}

export default CardList