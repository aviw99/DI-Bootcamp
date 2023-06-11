import './Hello.css'
import React from 'react';
import HelloClass from './HelloClass'

const Hello = () => {

const users = [
    {
    name: 'Mary',
    email: 'mary@gmail.com',
    id:1
    },
    {
    name: 'John',
    email: 'john@gmail.com',
    id:2
    },
    {
    name: 'David',
    email: 'david@gmail.com',
    id:3
    }
]
const styling = {
    textAlign:'center',
    display:'inline-block',
    padding: '20px',
    margin: '20px',
    border: '1px solid #ccc'
}
const returnusers = users.map(user => {
    return (
        <div key={user.id} style={styling}>
            <h4 className="title">{user.name}</h4>
            <h5>{user.email}</h5>
        </div>
    )
})
    return (
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>Hello</h1>
            {
                returnusers
            }
            <HelloClass/>
        </React.Fragment>
    )
};

export default Hello


