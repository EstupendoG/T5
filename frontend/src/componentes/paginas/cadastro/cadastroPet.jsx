import { useEffect, useState } from 'react'
import styles from '../paginas.module.css'
import api from '../../../api/api'

const CadastroPet = ({tema, pet}) => {
    const [dono, setDono] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [raca, setRaca] = useState('')
    const [sexo, setSexo] = useState('')

    useEffect(() => {
        if(pet){
            setDono(pet.clienteId)
            setNome(pet.nome)
            setTipo(pet.tipo)
            setRaca(pet.raca)
            setSexo(pet.genero)
        }
    }, [])

    function adicionarPet(){
        const novoPet = {
            nome: nome,
            tipo: tipo,
            raca: raca,
            genero: sexo
        }

        api.post(`pet/${dono}`, (novoPet))
            .then(() => {
                console.log('Pet Cadastrado!')
            })
            .catch((err) => console.error('Erro ao cadastrar Pet', err))
    }

    function atualizarPet(){
        const id = pet.id
        const petAtualizado = {
            idDono: dono,
            nome: nome,
            tipo: tipo,
            raca: raca,
            genero: sexo
        }

        api.put(`pet/${id}` , (petAtualizado))
            .then(() => {
                console.log('Pet Atualizado!')
            })
            .catch((err) => console.error('Erro ao atualizar Pet', err))
    }


    return (
        <>
            <h1>🐱 {pet ? 'Atualização' : 'Cadastro'} de Pet</h1>
            <br />
            <form onSubmit={pet ? atualizarPet : adicionarPet}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="ID do dono" aria-label="ID do dono" aria-describedby="basic-addon1" value={dono} onChange={(e) => setDono(e.target.value)} required/>
                </div>

                <br />

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" value={tipo} onChange={(e) => setTipo(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" value={raca} onChange={(e) => setRaca(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <select className="form-select" aria-label="Gênero do Pet" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                                <option value='' selected disabled>Gênero do Pet</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select>
                        </div>
                    </div>
                </div>

                <br />

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                        {pet ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </div>

            </form>
        </>
    )
}

export default CadastroPet