import React, { useState, useEffect } from 'react'
import { getData } from '../../utils/fetch.utils.data'
import "./quote.style.css"

type QuoteObj ={
  sentence: string;
  character : {
    name: string;
  }
}

function Quote() {
  const [quote, setQuote] = useState<QuoteObj>()
  
  const getQuote = async () => {
    const quotes = await getData<QuoteObj>("https://api.gameofthronesquotes.xyz/v1/random")
    setQuote(quotes)
  }    

  useEffect(() => {  
    getQuote()
  }, [])

  return (
    <div className="quote-container">
      <blockquote className="quote">"{quote?.sentence}"</blockquote>
      <cite className="quote-cite">-{quote?.character.name}</cite>
      <button className='quote-btn' onClick={getQuote}>Get new quote</button>
    </div>
  )

}

export default Quote