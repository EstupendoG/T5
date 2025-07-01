import express from 'express'
import cors from 'cors'
import Empresa from './modelo/empresa'

import routeProduto from './rotas/routeProduto'
import routeServico from './rotas/routeServico'
import routeCliente from './rotas/routeCliente'
import CPF from './modelo/cpf'
import RG from './modelo/rg'
import Telefone from './modelo/telefone'

const app = express()
app.use(cors())
app.use(express.json())

const empresa = new Empresa()

const rgs1 = [new RG("MG1234567" , new Date("1999-01-01"))]
const tels1 = [new Telefone("31", "99999-9999")]

const rgs2 = [new RG("SP7654321", new Date("1990-03-05"))]
const tels2 = [new Telefone("11", "98888-8888")]

const rgs3 = [new RG("RJ1122334", new Date("1992-12-21"))]
const tels3 = [new Telefone("21", "97777-7777")]

empresa.postCliente("João Silva", "João", "12345678901", new Date("1990-01-01"), rgs1, tels1)
empresa.postCliente("Maria Oliveira", "Maria", "10987654321", new Date("1985-05-20"), rgs2, tels2)
empresa.postCliente("Carlos Pereira", "Carlos", "11122233344", new Date("1992-12-15"), rgs3, tels3)
app.use('/cliente' , routeCliente(empresa))

empresa.postProduto("Ração para gatos", 59.90)
empresa.postProduto("Areia higiênica", 34.50)
empresa.postProduto("Brinquedo arranhador", 120.00)
app.use('/produto' , routeProduto(empresa))

empresa.postServico("Banho e Tosa", 59.90)
empresa.postServico("Adestramento", 34.50)
empresa.postServico("Diária Premium", 120.00)
app.use('/servico' , routeServico(empresa))

const port = 8000
app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`)
})