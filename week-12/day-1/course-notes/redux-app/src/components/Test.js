const  Test = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => props.setTitle('new title')}>change title</button>
        </div>
    )
}

export default Test
