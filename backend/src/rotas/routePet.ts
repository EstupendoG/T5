import { Router } from "express";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class RoutePet {
    public router: Router
    public clientes:Array<Cliente>
    
    constructor(clientes:Array<Cliente>){
        this.router = Router()
        this.clientes = clientes
        this.routes()
    }

    private routes(): Router {
        // Create
        this.router.post(`/:idDono`, (req, res) => {
            const idDono = parseInt(req.params.idDono)
            const { nome, tipo, raca, genero } = req.body
            if ( !nome || !tipo || !raca || !genero ) {
                res.status(400).send('Nem todos os campos obrigatórios de Pet foram preenchidos')
                return
            }

            const dono = this.clientes.find((c) => c.id === idDono)
            if( !dono ){
                res.status(404).send(`Nenhum dono com o id ${idDono}`)
                return
            }

            dono.postPet(nome, tipo, raca, genero)
        })
        // Read
        this.router.get('/', (req, res) => {
            const pets: Pet[] = []
            this.clientes.forEach((c) => {
                pets.push(...c.getPet())
            })
            res.json(pets)
        })
        // Update
        this.router.put('/:id' , (req, res) => {
            const id = parseInt(req.params.id)
            const { idDono , nome , raca , tipo , genero } = req.body

            const dono = this.clientes.find((c) => c.id === idDono)
            if( !dono ) {
                res.status(404).send(`Nenhum dono com o id ${idDono}`)
                return
            }
            
            // TODO: Se não achou o pet no id do dono fornecido, procura se o pet existe em qualquer um dos outros donos
            // if( !pet ) {
            //     let donoAntigo
            //     this.clientes.forEach((c) => {
            //         c.getPet().forEach((p) => {
            //             if (p.getId === id) {
            //                 donoAntigo = c
            //             }
            //         })
            //     })
            //     donoAntigo!.deletePet(id)
            // }

            const isOk = dono.putPet(
                id,
                nome,
                tipo,
                raca,
                genero
            )

            if(!isOk){
                res.status(404).send(`Nenhum Pet com o id ${id} encontrado para o dono ${dono.nomeSocial}`)
                return
            }
            res.sendStatus(204)
        })
        // Delete
        this.router.delete('/:id' , (req, res) => {
            const id = parseInt(req.params.id)
            const dono = this.clientes.find((c) => 
                c.getPet().some((p) => p.getId === id)
            )
            if( !dono ) {
                res.status(404).send(`Nenhum Pet com o id ${id}`)
                return
            }
            dono.deletePet(id)
            res.sendStatus(204)
        })


        return this.router
    }

}