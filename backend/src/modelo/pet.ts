export default class Pet {
    private id: number
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(id:number, nome:string , tipo:string , raca:string , genero:string) {
        this.id = id
        this.nome = nome
        this.tipo = tipo
        this.raca = raca
        this.genero = genero
    }

    public get getId(){return this.id}
    public get getNome(){return this.nome}
    public get getTipo(){return this.tipo}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}

    public set setNome(nome:string){this.nome = nome}
    public set setTipo(tipo:string){this.tipo = tipo}
    public set setRaca(raca:string){this.raca = raca}
    public set setGenero(genero:string){this.genero = genero}
}