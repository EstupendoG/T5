import Cliente from "./cliente";
import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

export default class Consumo {
    private cliente: CPF
    private pet: number
    private quantidade: number
    private produto?: number
    private servico?: number

    constructor(cliente:CPF , pet:number , quantidade:number , produto?:number , servico?:number){
        this.cliente = cliente
        this.pet = pet
        this.produto = produto
        this.servico = servico
        this.quantidade = quantidade
    }

    public get getCliente(): CPF{
        return this.cliente
    }
    public get getPet(): number{
        return this.pet
    }
    public get getQuantidade(): number{
        return this.quantidade
    }
    public get getProduto(): number | void{
        return this.produto
    }
    public get getServico(): number | void{
        return this.servico
    }
    
    public set setQuantidade(quantidade:number){
        this.quantidade = quantidade
    }

    public adicionarQuantidade(quantidade:number){
        this.quantidade += quantidade
    }
    
    
}