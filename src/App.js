import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='Home' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
