export default class Produto {
    public id!: number
    public nome!: string
    public valor!: number
    constructor( id:number , nome:string , valor:number){
        this.id = id
        this.nome = nome
        this.valor = valor
    }

    setNome(nome:string){
        this.nome = nome
    }

    setValor(valor:number){
        this.valor = valor
    }
}