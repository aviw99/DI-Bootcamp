import logo from './logo.svg';
import './App.css';
import User from './components/User';
import robots from './users.json';
import UserClass from './components/UserClass';


function App() {
  const users = [
    {id:1,name:'aaa',email:'aaa@gmail.com'},
    {id:2,name:'bbb',email:'bbb@gmail.com'},
    {id:3,name:'ccc',email:'ccc@gmail.com'},
    {id:4,name:'ddd',email:'ddd@gmail.com'}
  ]
  return (    
      <div >
      <header >
        {
          robots.map(user => {


            return(
              <UserClass  image = {user.id} name = {user.name} username = {user.username} email = {user.email} key = {user.id}/> 
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
