import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from './Components/Details';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Header/> 
         <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='detail/:id' element={<Details/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
