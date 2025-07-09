import styles from '../paginas.module.css'
import api from '../../../api/api'
import { useEffect, useState } from 'react'

const ListaPet = ({tema, seletorView}) => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        api.get('/cliente')
            .then((res) => {
                let clientes = res.data
                let pets = clientes.flatMap((c) => (
                    c.pets.map((pet) => (
                        {
                            ...pet,
                            clienteNome: c.nome,
                            clienteId: c.id,
                        }
                    ))
                ))

                setPets(pets)
                
            })
            .catch((err) => console.error('Erro ao buscar Clientes para procurar seus Pets', err))
    }, [])

    const deletar = (id) => {
        if(!window.confirm('Você deseja deletar esse Produto?')) return
        
        api.delete(`pet/${id}`)
            .then(
                setPets((prev) => prev.filter((p) => p.id !== id))
            )
            .catch((err) => console.error(`Erro ao deletar o Pet`, err))
    }

    return (
        <>
            <h1>🐱 Listagem de todos os Pets</h1>
            <br />
               
            {/* <div className="row gap-5 mx-5">
                <div className="col-4">
                    <img src="error-cat.png" className={styles.errorCatImage} />
                </div>

                <div className="col">
                    <h2 className='my-4 display-3'>Nada Registrado :(</h2>
                    <p>Por enquanto, não é possível realizar o cadastro de Pets no sistema. </p>
                    <p>Mas não se preocupe, estamos trabalhando nisso!</p>
                </div>

            </div>                         */}

            <table className="table table-hover table-striped table-borderless">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Dono</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>

                {pets.map((pet) => (
                    <tr>
                        <td scope="row">{pet.id}</td>
                        <td>{pet.nome}</td>
                        <td>{pet.tipo}</td>
                        <td>{pet.raca}</td>
                        <td>{pet.genero}</td>
                        <td>ID: {pet.clienteId} / {pet.clienteNome}</td>
                        <td style={{width:'10px'}}>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-warning"
                                    onClick={(e) => seletorView('CadastroPet', e, null, null, null, pet)}
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>

                                <button className="btn btn-outline-danger" onClick={() => deletar(pet.id)}>
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

        </>
    )
}

export default ListaPet