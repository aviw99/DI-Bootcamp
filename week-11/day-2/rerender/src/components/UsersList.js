const UserList = (props) => {
    
    const {name,email,username,id} = props.userInfo
    
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 purple">
            <img src={`https://robohash.org/${id}?size=150x150`}/>
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
} 

export default UserList