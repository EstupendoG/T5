import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"

import Cliente from "./cliente"
import Consumo from "./consumo"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private clientesId: number
    private produtos: Array<Produto>
    private produtosId: number
    private servicos: Array<Servico>
    private servicosId: number
    private consumos: Array<Consumo>
    constructor(){
        this.clientes = []
        this.clientesId = 0
        this.produtos = []
        this.produtosId = 0
        this.servicos = []
        this.servicosId = 0
        this.consumos = []
    }
    
    // CLIENTES
    // Create
    public postCliente(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, tels: Array<Telefone>): Cliente {
        const cliente = new Cliente(this.clientesId++, nome, nomeSocial, cpf, rgs, tels)
        this.clientes.push(cliente)
        return cliente
    }

    // Read
    public getCliente(): Array<Cliente> {
        return this.clientes
    }

    // Update
    public putCliente(id: number, nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, tels: Array<Telefone>): boolean {
        const cliente = this.clientes.find((c) => c.id === id)

        if (!cliente) return false

        nome && (cliente.setNome = nome)
        nomeSocial && (cliente.setNomeSocial = nomeSocial)
        cpf.getValor && (cliente.setCpf.setValor = cpf.getValor)
        cpf.getDataEmissao && (cliente.setCpf.setDataEmissao = new Date(cpf.getDataEmissao))
        rgs && (cliente.setRgs = rgs)
        tels && (cliente.setTelefones = tels)

        return true
    }

    // Delete
    public deleteCliente(id: number): boolean {
        const length = this.clientes.length
        this.clientes = this.clientes.filter((c) => c.id !== id)
        return this.clientes.length < length
    }



    
    // PRODUTOS
    // Create
    public postProduto(nome:string , valor:number): Produto {
        const produto = new Produto(this.produtosId++ , nome , valor)
        this.produtos.push(produto)
        return produto

    }
    // Read
    public getProduto(): Array<Produto>{
        return this.produtos
    }
    // Update
    public putProduto(id:number , nome:string , valor:number): boolean {
        const produto = this.produtos.find((p) => p.id === id)
        
        if (!produto) {
            return false
        }

        nome && produto.setNome(nome)
        valor && produto.setValor(valor)
        return true
    }
    // Delete
    public deleteProduto(id:number): boolean {
        const length = this.produtos.length
        this.produtos = this.produtos.filter((p) => p.id !== id)
        return this.produtos.length < length
    }



    // SERVIÇOS
    // Create
    public postServico(nome:string , valor:number): Servico{
        const servico = new Servico(this.servicosId++, nome, valor)
        this.servicos.push(servico)
        return servico
    }

    // Read
    public getServico(): Array<Servico> {
        return this.servicos
    }

    // Update
    public putServico(id:number , nome:string , valor:number): boolean {
        const servico = this.servicos.find((s) => s.id === id)
        if(!servico){
            return false
        }
        nome && servico.setNome(nome)
        valor && servico.setValor(valor)
        return true
    }

    // Delete
    public deleteServico(id:number): boolean{
        const length = this.servicos
        this.servicos = this.servicos.filter((s) => s.id !== id)
        return this.servicos < length
    }



    public get getServicos(){
        return this.servicos
    }
    public get getConsumos(){
        return this.consumos
    }
}