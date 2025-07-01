import { useEffect, useState } from "react"
import styles from '../paginas.module.css'
import api from "../../../api/api"

const ListaCliente = ({tema , seletorView}) => {
    const [clientes, setClientes] = useState([])
    const [mensagemErro , setMensagemErro] = useState(false)

    useEffect(() => {
        api.get('/cliente')
            .then((res) => setClientes(res.data))
            .catch((err) => console.error('Erro ao buscar Cliente: ', err))
    }, [])

    const deletar = (id) => {
        if(!window.confirm('Você deseja deletar esse Cliente?')) return
        
        api.delete(`cliente/${id}` , )
            .then(() => {
                setClientes((prev) => prev.filter(c => c.id !== id))
            })
            .catch((err) => console.error('Erro ao excluir Cliente: ', err))
    }

    useEffect(() => {
        clientes.length < 1
        ? setMensagemErro(true)
        : setMensagemErro(false)
    }, [clientes.length])

    return (
        <>
            <h1>👥 Listagem de todos os Clientes</h1>
            <br />

            {mensagemErro && (     
                <div className="row gap-5 mx-5">
                    <div className="col-4">
                        <img src="error-cat.png" className={styles.errorCatImage} />
                    </div>

                    <div className="col">
                        <h2 className='my-4 display-3'>Nada Registrado :(</h2>
                        <p>Nenhum Cliente foi encontrado no banco de dados, portanto, nada pode ser exibido nessa página! Para realizar um registro, acesse a <u onClick={(e) => seletorView('Cadastros',e)} style={{cursor:'pointer'}}> Página de Cadastros</u>!</p>
                    </div>

                </div>
            )}

            { clientes.map((cliente , index) => (
                <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample" key={index}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`panelsStayOpen-heading${cliente.id}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${cliente.id}` }aria-expanded="false" aria-controls={`panelsStayOpen-collapse${cliente.id}`}>
                            👤 {cliente.nome ? cliente.nome : 'Não Encontrado'}
                        </button>
                        </h2>
                        <div id={`panelsStayOpen-collapse${cliente.id}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${cliente.id}`}>
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col">
                                    <h5>🏷️ ID </h5>
                                    <p>Identificador: {cliente.id}</p>
                                </div>
                                {cliente.nomeSocial && (
                                    <div className="col">
                                        <h5>👤 Nome Social</h5>
                                        <p>{cliente.nomeSocial}</p>
                                    </div>
                                )}
                                <div className="col d-flex flex-column">
                                    <h5>🎫 CPF</h5>
                                    <span>Emitido em: {cliente.cpf.dataEmissao}</span>
                                    <span>{cliente.cpf.valor}</span>
                                </div>
                                {/* {cliente.email && (
                                    <div className="col">
                                        <h5>✉️ Email</h5>
                                        <p>{cliente.email}</p>
                                    </div>
                                )} */}
                            </div>

                            <br />
                            <hr />

                            <div className="row">
                                {cliente.rgs.length > 0 && (
                                    <div className="col">
                                        <h5>📄 RGs</h5>
                                        <table className="table table-hover table-borderless">
                                            <thead>
                                                <tr>
                                                <th scope="col">RG</th>
                                                <th scope="col">Data de Emissão</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            { cliente.rgs.map((rg) => (
                                                <tr>
                                                    <td>{rg.valor}</td>
                                                    <td>{rg.dataEmissao}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                
                                {cliente.telefones.length > 0 && (
                                    <div className="col">
                                        <h5>☎️ Telefones</h5>
                                        <table className="table table-hover table-borderless">
                                            <thead>
                                                <tr key={index}>
                                                <th scope="col">DDD</th>
                                                <th scope="col">Número</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                        
                                        { cliente.telefones.map((telefone) => (
                                            <tr key={index}>
                                                <td>({telefone.ddd})</td>
                                                <td>{telefone.numero}</td>
                                            </tr>
                                        ))}

                                            </tbody>
                                        </table>
                                    </div>
                                )}

                            </div>

                            {/* <hr />
                            <br />

                            <h5>🐱 Pets</h5>
                            <table className="table table-hover table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Tipo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Pimenta</td>
                                        <td>Gato</td>
                                        <td>Siamês</td>
                                    </tr>
                                </tbody>
                            </table> */}

                            <br />

                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-outline-warning w-100" 
                                    onClick={(e) => seletorView('CadastroCliente' , e, cliente, null, null)} >
                                        <i className="bi bi-pencil-fill"></i> 
                                        Atualizar 
                                    </button>
                                </div>
                                
                                <div className="col">
                                    <button className="btn btn-outline-danger w-100" onClick={() => deletar(cliente.id)}>
                                        <i className="bi bi-trash-fill"></i> 
                                        Remover 
                                    </button>
                                    
                                </div>

                            </div>
                            

                        </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </>
    )
}

export default ListaCliente