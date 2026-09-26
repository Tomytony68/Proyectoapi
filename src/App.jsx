import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Coleccion from './componentes/coleccion'
import Favoritos from './componentes/favoritos/Index'
import Informativa from './componentes/Informativa'
import Usuario from './componentes/Usuario'
import Pokemon from './componentes/pokemon'
import Inicio from './componentes/Inicio/Index'
import './App.css'


function App() {

  return (
   <>

     <Router>
      <nav className='c-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/coleccion">Coleccion</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/usuario">Usuario</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/coleccion" element={<Coleccion />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/informativa" element={<Informativa />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Router>
   </>
  )
}

export default App