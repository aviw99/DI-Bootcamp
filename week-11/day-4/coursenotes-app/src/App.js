import AppForm from './components/AppForm';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { Form } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <AppForm />
    </div>
    // <div className="App">
      
    //   <nav>
    //     <Link to='/'>Home</Link>
    //     <Link to='/about'> About</Link>
    //     <Link to='/contact'> Contact</Link>
    //   </nav>
    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='/about' element={<About />}/>
    //     <Route path='/contact/:id' element={<><Contact /></>}/>
    //   </Routes>
    // </div>
  );
}

export default App;
