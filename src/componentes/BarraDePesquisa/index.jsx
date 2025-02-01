import { useState } from 'react';
import './styles.css';

export default function BarraDePesquisa() {
    const [termoPesquisa, setTeremoPesquisa] = useState('');
    console.log(termoPesquisa);
    return(
        <input 
        type="search" 
        placeholder='Digite o que você procura' 
        className='barra-pesquisa' 
        value={termoPesquisa}
        onChange={(evento) => setTeremoPesquisa(evento.target.value)}/>
    )
}