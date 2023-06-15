import {  Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from 'react-bootstrap';  
import Home from './components/Home';
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Xp4 from "./components/Xp4";

function App() {
  const linkColor = {
    color:'white'
  }

  return (
    <div className="App">
      
   
        <Navbar  bg="primary" expand="md"> 
          <NavLink  style={linkColor} to='/'>Home</NavLink>
          <NavLink style={linkColor} to='/profile'>Profile</NavLink>
          <NavLink style={linkColor} to='/shop'>Shop</NavLink>
        </Navbar>
          
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/profile' element={<Profile />}/> 
            <Route path='/shop' element={<Shop />}/>    
          </Routes>
        </ErrorBoundary>
        <hr/>
        <PostList />
        <hr/>
        <Example1 />
        <hr/>
        <Example2 />
        <hr/>
        <Example3 />
        <hr/>
        <Xp4 />

    </div>
  );
}

export default App;
