import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id: number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(id:number , nome: string, nomeSocial: string, cpf: CPF , rgs: Array<RG> , telefones: Array<Telefone>) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }

    
    public set setNome(nome: string) {
        this.nome = nome
    }

    public set setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf
    }

    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs
    }

    public set setDataCadastro(data: Date) {
        this.dataCadastro = data
    }

    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones
    }

    public set setProdutosConsumidos(produtos: Array<Produto>) {
        this.produtosConsumidos = produtos
    }

    public set setServicosConsumidos(servicos: Array<Servico>) {
        this.servicosConsumidos = servicos
    }

    public adicionarPet(pet: Pet){
        this.pets.push(pet)
    }

    public removerPet(pet:Pet){
        let i = this.pets.indexOf(pet)
        this.pets.splice(i,1)
    }

    public atualizarPet(
        pet: Pet,
        nome:string|undefined,
        tipo:string|undefined, 
        raca:string|undefined, 
        genero:string|undefined
    ){
        nome   && (pet.setNome = nome)
        tipo   && (pet.setTipo = tipo)
        raca   && (pet.setRaca = raca)
        genero && (pet.setGenero = genero)
    }

}