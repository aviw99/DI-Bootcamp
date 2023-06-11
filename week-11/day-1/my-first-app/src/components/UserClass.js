import React from "react";

class UserClass extends React.Component{
    render(){
        const {name,email,username,image} = this.props;
        return (
            <div>
                <img src={`https://robohash.org/${image}?size=150x150`}/>
                <h2>Name: {name}</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
            </div>
        )
    }
}

export default UserClass