import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Ordenacao from './componentes/Ordenacao';
import Card from './componentes/Card';
import Filtro from './componentes/Filtro';
import Sidebar from './componentes/Sidebar';

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <div>
      <BarraDePesquisa />
      <Filtro />
      <Ordenacao />
      <Card />
      </div>
    </div>
  )
}

export default App
