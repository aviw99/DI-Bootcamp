function Child({changeTitle}){

    const childStyle = {
        backgroundColor:'#fff',
        height:'15vh',
        padding:'15px'
    }

    const newWord = (e) => {

        if(e.key === 'Enter'){
            e.preventDefault()
            const word = e.target.value;
            return word
        }
    }


    const newWordForm = () => {
        return(
            <form>
                <input type='text' onKeyPress={newWord}/>
            </form>
        )
    }

    return(
        <div style={childStyle}>
            <h1>Child</h1>
            {/*<button onClick={() => changeTitle('New Word')}>Click to add text</button>*/}
            <button onClick={() => changeTitle(newWordForm())}>Click to add text</button>

        </div>
    )
}

export default Child