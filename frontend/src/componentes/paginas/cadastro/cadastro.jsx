const HomeCadastro = ({tema , seletorView}) => {
    return(
        <>
            <h1>Cadastros</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" 
                    onClick={(e) => seletorView('CadastroCliente', e)}
                    style={{ cursor: 'pointer' }}>
                        👤 Cadastro de Cliente
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('CadastroPet', e)}
                    style={{ cursor: 'pointer' }}>
                        🐱 Cadastro de Pet
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('CadastroProduto', e)}
                    style={{ cursor: 'pointer' }}>
                        📦 Cadastro de Produto
                </li>
                <li className="list-group-item" 
                    onClick={(e) => seletorView('CadastroServico', e)}
                    style={{ cursor: 'pointer' }}>
                        🛠️ Cadastro de Serviço
                </li>
            </ul>
        </>
    )
}

export default HomeCadastro