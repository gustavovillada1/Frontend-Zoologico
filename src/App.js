import logo from './logo.svg';
import './App.css';
import Home from './views/HomeView'
import Animals from './views/AnimalsView'
import Register from './views/RegisterView'
import Search from './views/SearchAnimalView'
import { BrowserRouter as Router,Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='Container'>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/animals' element={<Animals/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
