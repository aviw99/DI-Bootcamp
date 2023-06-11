
const User = (props) => {
    // console.log(props);
    
    const {name,email,username,image} = props
    
    return (
        <div>
            <img src={`https://robohash.org/${image}?size=150x150`}/>
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default User