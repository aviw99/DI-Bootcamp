// import Parent from './components/Parent';
// import Child from './components/Child';
// import Counter from './components/Counter';
// import ErrorBoundary from './ErrorBoundary';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('John')

const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target;

}

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit} method='POST'>

          name: <input 
                  type='text' 
                  onChange={(e)=>setName(e.target.value)}
                />
          <input type='submit' value='Send' />

        </form>

        {name}

        {/* <ErrorBoundary>

          <Counter />
      
        </ErrorBoundary>

        <Counter /> */}

      </header>
    </div>
  );
}

export default App;
