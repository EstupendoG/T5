import { useEffect, useState } from "react";
import api from "../../../api/api";
import { use } from "react";

const CadastroCliente = ({tema , cliente}) => {
    // Informações Principais
    const [nome , setNome] = useState('')
    const [nomeSocial , setNomeSocial] = useState('')
    
    
    // Informações do CPF
    const [valorCpf , setValorCpf] = useState('')
    const [dataCpf, setDataCpf] = useState()
    
    // Informações dos RGS
    const [rgs , setRgs] = useState([])
    const [valorRg , setValorRg] = useState('')
    const [dataRg, setDataRg] = useState()

    // Informações dos Telefones
    const [telefones , setTelefones] = useState([])
    const [ddd , setDdd] = useState('')
    const [numeroTelefone , setNumeroTelefone] = useState('')

    // CADASTRO 
    // Adicionando Cliente ao banco
    function adicionarCliente(e) {

        e.preventDefault()
        if(ddd && numeroTelefone){
            adicionarTel()
        }

        const novoCliente = {
            nome: nome,
            nomeSocial: nomeSocial,
            cpf: {
                valor: valorCpf,
                dataEmissao: dataCpf,
            },
            rgs: rgs,
            telefones: telefones
        }
        
        api.post('/cliente' , (novoCliente))
            .then(() => {
                console.log('Cliente Cadastrado')
            })
            .catch((err) => console.error('Erro ao cadastrar cliente' , err))
    }

    // ATUALIZAÇÃO
    // Preenchendo o formulário com as informações do cliente
    useEffect(() => {
        if(cliente){
            // Informações Principais
            setNome(cliente.nome || '')
            setNomeSocial(cliente.nomeSocial || '')
            
            // Informações do CPF
            setValorCpf(cliente.cpf.valor || '')
            setDataCpf(cliente.cpf.dataEmissao || '')

            // Informações dos Telefones
            setRgs(cliente.telefones || [])

            // Informações dos Telefones
            setTelefones(cliente.telefones || [])
        }
    }, [cliente])
    // Atualizando Cliente
    function atualizarCliente() {
        const clienteAtualizado = {
            nome: nome,
            nomeSocial: nomeSocial,
            cpf: {
                valor: valorCpf,
                dataEmissao: dataCpf,
            },
            rgs: rgs,
            telefones: telefones
        }

        api.put('/cliente' , (clienteAtualizado))
            .then(() => {
                console.log('Cliente Atualizado!')
            })
            .catch((err) => console.error('Erro ao atualizar cliente', err))
    }

    
    // RG
    // Adicionando um RG ao Cliente
    function adicionarRG(e) {
        if((!valorRg || !dataRg)){
            alert('Complete os campos anteriores antes de adicionar um RG')
            return
        }
        
        const novoRG = {
            valor: valorRg,
            dataEmissao: dataRg,
        }
        setRgs([...rgs , novoRG])

        setValorRg('')
        setDataRg('')
    };
    // Função para Deletar RG
    function removerRG(index) {
        const novaLista = rgs.filter((_ , i) => i !== index)
        setRgs(novaLista)
    };

    // TELEFONE
    // Adicionando um Telefone ao Cliente
    function adicionarTel() {
        if((!ddd || !numeroTelefone)){
            alert('Complete os campos anteriores antes de adicionar um telefone')
            return
        }
        
        const novoTelefone = {
            ddd: ddd,
            numero: numeroTelefone,
        }
        setTelefones([...telefones , novoTelefone])

        setDdd('')
        setNumeroTelefone('')
    };
    // Função para Deletar Telefone
    function removerTel(index) {
        const novaLista = telefones.filter((_ , i) => i !== index)
        setTelefones(novaLista)
    };


    return (
        <>
            <h1>👤 {cliente ? 'Atualização' : 'Cadastro'} de Cliente</h1>
            
            <br />

            <form onSubmit={(e) => cliente ? atualizarCliente : adicionarCliente(e)}>
                {/* NOME */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome *" aria-label="Nome *" aria-describedby="basic-addon1" value={nome} required onChange={(e) => setNome(e.target.value)} />
                </div>

                {/* CPF */}
                <div className="row mb-2">
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Número de CPF *" aria-label="Número de CPF" aria-describedby="basic-addon1" value={valorCpf} required onChange={(e) => setValorCpf(e.target.value)}/>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Data de Emissão *"
                            value={dataCpf} required onChange={(e) => setDataCpf(e.target.value)}
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} 
                            />
                        </div>
                    </div>
                </div>
                
                {/* NOME SOCIAL */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)}/>
                </div>
                
                {/* EMAIL */}
                {/* <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div> */}
                

                {/* ENDEREÇO */}
                {/* <h5 className="mt-4">Endereço</h5> */}

                {/* Parte Cima */}
                {/* <div className="row"> */}
                    {/* Cep */}
                    {/* <div className="col-2">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="CEP *" aria-label="CEP *" aria-describedby="basic-addon1" value={cep} required onChange={(e) => setCep(e.target.value)}/>
                        </div>
                    </div> */}
                    {/* Estado */}
                    {/* <div className="col-5">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Estado *" aria-label="Estado *" aria-describedby="basic-addon1" value={estado} required onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </div> */}
                    {/* Cidade */}
                    {/* <div className="col-5">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Cidade *" aria-label="Cidade *" aria-describedby="basic-addon1" value={cidade} required onChange={(e) => setCidade(e.target.value)} />
                        </div>
                    </div>
                    
                </div> */}

                {/* Parte Baixo */}
                {/* <div className="row"> */}
                    {/* Bairro */}
                    {/* <div className="col-5">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Bairro *" aria-label="Bairro *" aria-describedby="basic-addon1" value={bairro} required onChange={(e) => setBairro(e.target.value)} />
                        </div>
                    </div> */}

                    {/* Rua */}
                    {/* <div className="col-5">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Rua *" aria-label="Rua *" aria-describedby="basic-addon1" value={rua} required onChange={(e) => setRua(e.target.value)} />
                        </div>
                    </div> */}

                    {/* Número do Endereço */}
                    {/* <div className="col-2">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Número *" aria-label="Número *" aria-describedby="basic-addon1" value={numeroEndereco} required onChange={(e) => setNumeroEndereco(e.target.value)} />
                        </div>
                    </div>
                </div> */}
                {/* Complemento */}
                {/* <textarea className="form-control mb-5" id="exampleFormControlTextarea1" rows="3" placeholder="Complemento" value={complementoEndereco} onChange={(e) => setComplementoEndereco(e.target.value)}></textarea> */}
                
                {/* TELEFONES */}
                {/* Exibição de telefones para atualização */}
                <h5>📄 RGs</h5>
                {rgs.length > 0 && (
                    <div className="col">
                        <table className="table table-hover table-borderless align-middle">
                            <thead>
                                <tr>
                                <th scope="col">RG</th>
                                <th scope="col">Data de Emissão</th>
                                <th scope="col">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                        
                        { rgs.map((rg , index) => (
                            <tr key={index}>
                                <td>{rg.valor}</td>
                                <td>{rg.dataEmissao}</td>
                                <td style={{width:'10px'}}>
                                    <button className="btn btn-outline-danger" type="button" onClick={() => removerRG(index)}>
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}

                            </tbody>
                        </table>
                    </div>
                )}

                <div className="row mb-2">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Número do RG" aria-label="Número de CPF" aria-describedby="basic-addon1" value={valorRg} onChange={(e) => setValorRg(e.target.value)}/>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Data de Emissão"
                            value={dataRg} onChange={(e) => setDataRg(e.target.value)}
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} 
                            />
                        </div>
                    </div>
                    {/* Botão de Adicionar Rg */}
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-success w-100" type="button" style={{ background: tema }} onClick={adicionarRG} > Adicionar RG </button>
                        </div>
                    </div>
                </div>

                <br />

                {/* TELEFONES */}
                {/* Exibição de telefones para atualização */}
                <h5>☎️ Telefones</h5>
                { telefones.length > 0 && (
                    <div className="col">
                        <table className="table table-hover table-borderless align-middle">
                            <thead>
                                <tr>
                                <th scope="col">DDD</th>
                                <th scope="col">Número</th>
                                <th scope="col">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                        
                        { telefones.map((telefone , index) => (
                            <tr key={index}>
                                <td>({telefone.ddd})</td>
                                <td>{telefone.numero}</td>
                                <td style={{width:'10px'}}>
                                    <button className="btn btn-outline-danger" type="button" onClick={() => removerTel(index)}>
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}

                            </tbody>
                        </table>
                    </div>
                )}

                <div className="row">
                    {/* Ddd */}
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="DDD do Telefone" aria-label="DDD do Telefone" aria-describedby="basic-addon1" value={ddd} onChange={(e) => setDdd(e.target.value)}/>
                        </div>
                    </div>
                    {/* Número do Telefone */}
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="Número de Telefone" value={numeroTelefone} onChange={(e) => setNumeroTelefone(e.target.value)} />
                        </div>
                    </div>    
                    {/* Botão de Adicionar Telefone */}
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-success w-100" type="button" style={{ background: tema }} onClick={adicionarTel} > Adicionar Telefone </button>
                        </div>
                    </div>
                </div>

                <br />

                {/* Botão de Submeter */}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}> {cliente ? ('Atualizar') : ('Cadastrar')} </button>
                </div>
            </form>
        </>
    )

}

export default CadastroCliente