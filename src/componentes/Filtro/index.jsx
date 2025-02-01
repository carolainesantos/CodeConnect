import Close from './assets/close.svg';


import './styles.css';



export default function Filtro() {
    return (
        <section className='container-filtro'>
            <ul>
                <li>Programação
                <img src={Close} alt="excluir" />
                </li>
                <li>Acessibilidade
                <img src={Close} alt="excluir" />
                </li>
                <li>React
                <img src={Close} alt="excluir" />
                </li>
            </ul>

            <button>Limpar Tudo</button>
        </section>
    )
}