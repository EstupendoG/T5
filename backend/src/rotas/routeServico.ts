import { Router } from "express";
import Empresa from "../modelo/empresa";

function routeServico(empresa:Empresa): Router {
    const router = Router()

    // Create
    router.post('/', (req, res) => {
        const { nome, valor } = req.body
        if(!nome || valor == null){
            res.status(400).send("Nem todos os campos de Serviço foram preenchidos")
            return
        }
        const novo = empresa.postServico(nome, valor)
        res.status(201).json(novo)
    })

    // Read
    router.get('/' , (req, res) => {
        res.json(empresa.getServico())
    })

    // Update
    router.put('/:id' , (req, res) => {
        const id = parseInt(req.params.id)
        const { nome , valor} = req.body
        const isOk = empresa.putServico(id, nome, valor)
        if (!isOk){
            res.status(404).send(`Nenhum Serviço com id ${id} encontrado`)
            return
        }
        res.sendStatus(204)
        return
    })

    // Delete
    router.delete('/:id' , (req, res) => {
        const id = parseInt(req.params.id)
        const isOk = empresa.deleteServico(id)
        if (!isOk){
            res.status(404).send(`Nenhum Serviço com id ${id} encontrado`)
            return
        }
        res.sendStatus(204)
        return
    })

    return router
}

export default routeServico