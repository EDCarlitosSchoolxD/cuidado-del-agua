import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import { Home } from './pages/Home';
import { Importancia } from './pages/Importancia';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='importancia' element={<Importancia />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
