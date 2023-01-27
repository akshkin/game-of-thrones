import { Character } from "../../App"
import Card from "../card/card.component"

import "./card-list.style.css"

type CardListProps = {
  characters: Character[]
}
function CardList({characters}: CardListProps){
           
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