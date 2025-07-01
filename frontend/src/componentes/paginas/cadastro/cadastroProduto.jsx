import { useEffect, useState } from 'react'
import styles from '../paginas.module.css'
import api from '../../../api/api'

const CadastroProduto = ({tema, produto}) => {
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState()

    function adicionarProduto() {
        const novoProduto = {
            nome: nome,
            valor: valor
        }

        api.post('/produto' , (novoProduto))
            .then(() => {
                console.log('Produto Cadastrado')
            })
            .catch((err) => console.error('Erro ao cadastrar Produto' , err))
    }

    useEffect(() => {
        if(produto) {
            setNome(produto.nome)
            setValor(produto.valor)
        }
    }, [produto])

    function atualizarProduto() {
        const id = produto.id
        const produtoAtualizado = {
            id: id,
            nome: nome,
            valor: valor
        }

        api.put(`produto/${id}` , (produtoAtualizado))
            .then(() => {
                console.log('Produto Atualizado!')
            })
            .catch((err) => console.error('Erro ao atualizar Produto', err))
    }
    

    return (
        <>
            <h1>📦 {produto ? 'Atualização' : 'Cadastro'} de Produto</h1>
            <br />
            <form onSubmit={produto ? atualizarProduto : adicionarProduto}>
                <div className="row">
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome do Produto" aria-describedby="basic-addon1" value={nome} required onChange={(e) => setNome(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" aria-label="Valor do Produto" placeholder="Valor do Produto" value={valor} required onChange={(e) => setValor(e.target.value)}/>
                        </div>
                    </div>
                </div>
                
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>{produto ? 'Atualizar' : 'Cadastrar'}</button>
                </div>

            </form>
        </>
    )
}

export default CadastroProduto