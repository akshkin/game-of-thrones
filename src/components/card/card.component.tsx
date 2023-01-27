import { Character } from "../../App"

import "./card.style.css"

type CardProps = {
  character: Character;
}

function Card({character}: CardProps){
  const {imageUrl, fullName, title, family} = character
  return(
    <div className="card-container">
      <img src={imageUrl} alt={`${fullName}`}/>
      <h2>{fullName}</h2>
      <p><span className="bold">Title:</span> {title}</p>
      <p><span className="bold">House:</span> {family}</p>
    </div>
  )
  
}

export default Card