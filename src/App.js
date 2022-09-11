import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import { Home } from './pages/Home';
import { Importancia } from './pages/Importancia';
import { Recomendaciones } from './pages/Recomendaciones';

import './App.css'
import { Formulario } from './pages/Formulario';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='importancia' element={<Importancia />} />
        <Route path='recomendaciones' element={<Recomendaciones />} />
        <Route path='form' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
