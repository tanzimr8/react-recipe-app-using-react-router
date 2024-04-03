import './App.css';
import {Routes,Route} from 'react-router-dom';
// import Navbar from './components/NavComponent';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import NavComponent from './components/NavComponent';
function App() {
  return (
    <div>
      <NavComponent/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe/:id' element={<Details/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
