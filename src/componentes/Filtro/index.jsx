import './styles.css';



export default function Filtro() {
    return (
        <section className='container-filtro'>
            <ul>
                <li>Programação</li>
            </ul>

            <ul>
                <li>Acessibilidade</li>
            </ul>

            <ul>
                <li>React</li>
            </ul>

            <button>Limpar Tudo</button>
        </section>
    )
}