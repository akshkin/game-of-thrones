import React, { useEffect, useState } from 'react'
import "./quote.styles.css"

function Quote() {
    const [quote, setQuote] = useState({})

    const { sentence, character } = quote
    async function getQuote(){
        const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random")
        const data = response.json()
        setQuote(data)
    }

    useEffect(() => {
        getQuote()
    }, [])
  
    return (
        <div className="quote-container">
            <blockquote className="quote">"{sentence}"</blockquote>
            <cite className="quote-cite">-{character?.name}</cite>
            <button className='quote-btn' onClick={getQuote}>New Quote</button>
        </div>
  )
}

export default Quote