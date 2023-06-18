
import Header from "./components/Header";

import FormList from "./components/Parent";


function App() {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#d5d5d5';



  return (
    <div>

        <Header/>
        <FormList />
    </div>
  );
}

export default App;
