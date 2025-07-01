const HomeLista = ({tema , seletorView}) => {
    return(
        <>
            <h1>Listagem</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" 
                    onClick={(e) => seletorView('ListaCliente', e)}
                    style={{ cursor: 'pointer' }}>
                        👤 Listar todos os Clientes
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('ListaPet', e)}
                    style={{ cursor: 'pointer' }}>
                        🐱 Listar todos os Pets
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('ListaProduto', e)}
                    style={{ cursor: 'pointer' }}>
                        📦 Listar todos os Produtos
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('ListaServico', e)}
                    style={{ cursor: 'pointer' }}>
                        🛠️ Listar todos os Serviços
                </li>
            </ul>
        </>
    )
}

export default HomeLista