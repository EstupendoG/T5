import { Router } from 'express'
import Empresa from '../modelo/empresa'

export default class RouteProduto{
    public router: Router
    public empresa: Empresa

    constructor(empresa:Empresa){
        this.router = Router()
        this.empresa = empresa
        this.routes()
    }   

    private routes(): Router{
        // Create
        this.router.post('/' , (req, res) => {
            const { nome , valor } = req.body
            if(!nome || valor === null){
                res.status(400).send("Nem todos os campos de Produto foram preenchidos")
                return 
            } 
            const novo = this.empresa.postProduto(nome, valor)
            res.status(201).json(novo)
        })

        // Read
        this.router.get('/', (req, res) => {
            res.json(this.empresa.getProduto())
        })

        // Update
        this.router.put('/:id' , (req, res) => {
            const id = parseInt(req.params.id)
            const {nome , valor} = req.body
            const isOk = this.empresa.putProduto(id, nome, valor)
            if (!isOk){
                res.status(404).send(`Nenhum Produto com id ${id} encontrado`)  
                return 
            } 
            res.sendStatus(204)
            return 
        })

        this.router.delete('/:id' , (req, res) => {
            const id = parseInt(req.params.id)
            const isOk = this.empresa.deleteProduto(id)
            if (!isOk) {
                res.status(404).send(`Nenhum Produto com id ${id} encontrado`)
                return 
            }
            res.sendStatus(204)
            return 
        })
        
        return this.router        
    }

}