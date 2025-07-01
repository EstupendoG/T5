import { Router } from 'express'
import Empresa from '../modelo/empresa'

function routeCliente(empresa: Empresa): Router {
    const router = Router()

    // Create
    router.post('/', (req, res) => {
        const { nome, nomeSocial, cpfValor, cpfData, rgs, telefones } = req.body
        if (!nome || !cpfValor || !cpfData || !rgs || !telefones) {
            res.status(400).send("Nem todos os campos de Cliente foram preenchidos")
            return
        }
        try {
            const novoCliente = empresa.postCliente(nome, nomeSocial, cpfValor, new Date(cpfData), rgs, telefones)
            res.status(201).json(novoCliente)
        } catch (error) {
            res.status(500).send("Erro ao criar cliente")
        }
    })

    // Read (todos)
    router.get('/', (req, res) => {
        res.json(empresa.getCliente())
    })

    // Read (por id)
    router.get('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const cliente = empresa.getCliente().find(c => c.id === id)
        if (!cliente) {
            res.status(404).send(`Cliente com id ${id} não encontrado`)
            return
        }
        res.json(cliente)
    })

    // Update
    router.put('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const { nome, nomeSocial, cpfValor, cpfData, rgs, telefones } = req.body
        const cpfDataValue = cpfData ? new Date(cpfData) : new Date() // Ou outra data padrão

        const isOk = empresa.putCliente(
            id,
            nome,
            nomeSocial,
            cpfValor,
            cpfDataValue,
            rgs,
            telefones
        )


        if (!isOk) {
            res.status(404).send(`Nenhum Cliente com id ${id} encontrado`)
            return
        }
        res.sendStatus(204)
    })

    // Delete
    router.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const isOk = empresa.deleteCliente(id)
        if (!isOk) {
        res.status(404).send(`Nenhum Cliente com id ${id} encontrado`)
        return
        }
        res.sendStatus(204)
    })

    return router
}

export default routeCliente
