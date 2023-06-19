import {useState, useEffect} from "react";

const Header = (props) => {
    const [lastScore, setLastScore] = useState(props.score);
    const [topScore, setTopScore] = useState(0);
    useEffect(() => {
        if(props.score > topScore && props.score > props.lastScore){
            setTopScore(props.score)
        }
    },[props.score,props.lastScore, topScore])

    const headerStyle ={
        backgroundColor:'#ff0000',
        color:'#fff'
    }
    const topHeader = {
        display:'flex',
        justifyContent: 'space-around'
    }
    const bottomStyle = {
        background: 'linear-gradient(to right, #ff0000, purple)',
        borderTop:'2px grey solid'
    }

    return(
        <div style={headerStyle}>
            <div style={topHeader}>
                <h1 style={{marginTop:'0'}}>Superheroes Memory Game</h1>
                <p>Score: <span style={{fontSize:'large'}}>{props.score}</span></p>
                <p>Last Score: <span style={{fontSize:'large'}}>{props.lastScore}</span></p>
                <p>Top Score: <span style={{fontSize:'large'}}>{topScore}</span></p>
            </div>
            <div style={bottomStyle}>
                <h3>Get points by clicking on an image but don't click on any more than once!</h3>
            </div>
        </div>
    )
}

export default Header