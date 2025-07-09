import CPF from "./cpf"
import Empresa from "./empresa"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"
import gerarPetsId from "./gerarPetId"

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
    private petsId: number
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
        this.petsId = 1
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



    // PET
    public postPet(nome:string , tipo:string , raca:string , genero:string): Pet{
        const pet = new Pet(gerarPetsId() , nome , tipo , raca , genero)
        this.pets.push(pet)
        return pet
    }
    // Read
    public getPet(): Array<Pet>{
        return this.pets
    }
    // Update
    public putPet(
        id: number,
        nome:string,
        tipo:string, 
        raca:string, 
        genero:string
    ): boolean {
        const pet = this.pets.find((p) => p.getId === id)

        if(!pet) return false

        nome   && (pet.setNome = nome)
        tipo   && (pet.setTipo = tipo)
        raca   && (pet.setRaca = raca)
        genero && (pet.setGenero = genero)
        return true
    }
    // Delete
    public deletePet(id:number): boolean{
        const length = this.pets.length
        this.pets = this.pets.filter((p) => p.getId !== id)
        return this.pets.length < length
    }

}