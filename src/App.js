import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import { Home } from './pages/Home';
import { Importancia } from './pages/Importancia';
import { Recomendaciones } from './pages/Recomendaciones';

import './App.css'
import { Ahorrar } from './pages/Ahorrar';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='importancia' element={<Importancia />} />
        <Route path='recomendaciones' element={<Recomendaciones />} />
        <Route path='ahorrar' element={<Ahorrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
