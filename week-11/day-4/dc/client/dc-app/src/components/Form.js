import { useState, useEffect } from "react";

const Form = () => {

    const [input, setInput] = useState('');
    const [postData, setPostData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = await fetch('http://localhost:3000/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input:input})
        })
        const data = await post.text()
        setPostData(data)
        console.log('form submitted')

    }

    return(
        <>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input type='submit'/>
                <h3>{postData}</h3>
            </form>

        </>
    )

}

export default Form
