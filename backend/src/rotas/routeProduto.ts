import { Router } from 'express'
import Empresa from '../modelo/empresa'

function routeProduto(empresa:Empresa): Router{
    const router = Router()

    // Create
    router.post('/' , (req, res) => {
        const { nome , valor } = req.body
        if(!nome || valor === null){
            res.status(400).send("Nem todos os campos de Produto foram preenchidos")
            return 
        } 
        const novo = empresa.postProduto(nome, valor)
        res.status(201).json(novo)
    })

    // Read
    router.get('/', (req, res) => {
        res.json(empresa.getProduto())
    })

    // Update
    router.put('/:id' , (req, res) => {
        const id = parseInt(req.params.id)
        const {nome , valor} = req.body
        const isOk = empresa.putProduto(id, nome, valor)
        if (!isOk){
            res.status(404).send(`Nenhum Produto com id ${id} encontrado`)  
            return 
        } 
        res.sendStatus(204)
        return 
    })

    router.delete('/:id' , (req, res) => {
        const id = parseInt(req.params.id)
        const isOk = empresa.deleteProduto(id)
        if (!isOk) {
            res.status(404).send(`Nenhum Produto com id ${id} encontrado`)
            return 
        }
        res.sendStatus(204)
        return 
    })

    return router
}

export default routeProduto