import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import DetailPokemon from './Components/DetailPokemon';
import MyPokemon from './Components/MyPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:name" element={<DetailPokemon />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
      </Routes>
    </Router>
    
  );
}

export default App;
