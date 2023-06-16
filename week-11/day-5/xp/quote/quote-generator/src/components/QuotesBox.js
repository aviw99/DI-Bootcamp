import { useState, useEffect } from "react";
import quotes from "./Quotes";

const QuotesBox = () => {

    const initialQuote = quotes[0];
    const initialQuoteCleaned = JSON.stringify(initialQuote.quote);
    const initialAuthorCleaned = JSON.stringify(initialQuote.author).replace(/"/g,'-');

    const newQuote = quotes[Math.floor(Math.random()*quotes.length)];
    const newQuoteCleaned = JSON.stringify(newQuote.quote);
    const newAuthorCleaned = JSON.stringify(newQuote.author).replace(/"/g,'-');

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const [backgroundColor, setBackgroundColor] = useState('#5d0101');
    const [quote, setQuote] = useState(
        <div>
            <h2>{initialQuoteCleaned}</h2>
            <p><small><i>{initialAuthorCleaned}</i></small></p>
        </div>
    )

    const boxStyle = {
        margin: '50px',
        width: '45vw',
        minHeight: '45vh',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        color: backgroundColor
    }
    const buttonStyle = {
        margin: '10px',
        backgroundColor: backgroundColor,
        border:'none',
        color: '#fff',
        padding: '5px',
        borderRadius: '3px'
    }

    const body = document.querySelector('body');
    body.style.backgroundColor = backgroundColor;
    const randomQuote = (e) => {
        e.preventDefault()
        setQuote(
            <div>
                <h2>{newQuoteCleaned}</h2>
                <p><small><i>{newAuthorCleaned}</i></small></p>
            </div>
        )
        setBackgroundColor(randomColor)
    }


    return(

            <div style={boxStyle}>
                <div style={{height:'32vh'}}>
                    {quote}
                </div>
                <button style={buttonStyle} onClick={randomQuote}>New Quote</button>
            </div>

    )
}

export default QuotesBox