import React from "react";
import UserList from "./UsersList";


class UserListC extends React.Component{
    constructor(){
        super()
        this.state = {
            arr: []
        }
    }
    handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
        
            this.setState({arr:data})
        })
        .catch(err => console.log(err))
    }

componentDidMount = () => {
    this.handleClick()
}

    render(){
        return(
            <div>   
              
            {
                this.state.arr.map(item => {
                    return <UserList userInfo={item} key={item.id}/>
                })
            }
           </div>
        )
        
    }
}

export default UserListC