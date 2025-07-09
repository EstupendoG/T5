// Bibliotecas
import express from 'express'
import cors from 'cors'

// Classes
import Empresa from './modelo/empresa'
import Populador from './populate'

// Rotas
import RoutePet from './rotas/routePet'
import RouteProduto from './rotas/routeProduto'
import routeServico from './rotas/routeServico'
import routeCliente from './rotas/routeCliente'

const app = express()
app.use(cors())
app.use(express.json())

const empresa = new Empresa()
const populador = new Populador(empresa)
populador.popular()

// ROTAS
app.use('/cliente' , routeCliente(empresa))

const pet = new RoutePet(empresa.getCliente())
app.use('/pet' , pet.router)

const produto = new RouteProduto(empresa)
app.use('/produto' , produto.router)

app.use('/servico' , routeServico(empresa))

// SERVIDOR
const port = 8000
app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`)
})