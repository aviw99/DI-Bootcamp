import Child from "./Child";
import {useState} from "react";

function Parent(){
    const [word, setWord] = useState('')
    const parentStyle = {
        textAlign:'center',
        backgroundColor:'#ffd',
        width:'60vw',
        height:'40vh',
        padding:'30px'
    }
    return(
        <div style={parentStyle}>

            <h1>Parent</h1>

            <Child changeTitle={newWord => setWord(newWord)} />

            <h2>{word}</h2>

        </div>
    )
}

export default Parent