import {useState} from "react";
import '../App.css'
const Form = () => {


    const [inputList, setInputList] = useState([]);

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            const newItem = e.target.value;
            setInputList((prevList) => [...prevList, newItem])
            e.target.value = '';
        }
    }
    const formStyle = {
        textAlign:'center'
    }
    const listStyle = {
        marginTop:'20px',
        width:'60vw',
        textAlign: 'left ',
        margin: '0 auto'

    }

    const listItemStyle = {
        backgroundColor:'#fff',
        border:'1px solid rgb(213, 213, 213)',
        borderRadius:'5px',
        margin:'2px',
        padding:'10px'
    }

    const handleClick = (index) => {
        setInputList((prevList) => prevList.filter((_, i) => i !== index));
    };



    return(
        <div style={formStyle}>

            <form>
                <input type='text' placeholder='Add a new To-Do: ' onKeyPress={handleKeyPress}/>
            </form>
            <br/>
            <div style={listStyle} id='listWrap'>
                {
                    inputList.map((item, index) => {

                        return (
                            <div style={listItemStyle} key={index} onClick={() => handleClick(index)}>
                                <span>{(index + 1) + ' - ' + item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form
