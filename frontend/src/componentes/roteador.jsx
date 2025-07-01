/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./componentes/barraNavegacao"

import HomeLista from "./paginas/listas/lista";
import ListaCliente from "./paginas/listas/listaClientes";
import ListaPet from "./paginas/listas/listaPets";
import ListaProduto from "./paginas/listas/listaProdutos";
import ListaServico from "./paginas/listas/listaServicos";

import HomeCadastro from "./paginas/cadastro/cadastro";
import CadastroCliente from "./paginas/cadastro/cadastroCliente";
import CadastroPet from "./paginas/cadastro/cadastroPet";
import CadastroProduto from "./paginas/cadastro/cadastroProduto";
import CadastroServico from "./paginas/cadastro/cadastroServico";


export default function Roteador() {
    const [tela, setTela] = useState('Listagem')
    
    const [cliente , setCliente] = useState(null)
    const [produto , setProduto] = useState(null)
    const [servico , setServico] = useState(null)
    
    const selecionarView = (valor, e, cliente = null , produto = null , servico = null) => {
        e.preventDefault()
        setCliente(cliente)
        setProduto(produto)
        setServico(servico)
        setTela(valor)
    }
    
    const construirView = () => {
        console.log("Tela atual:", tela)
        if (tela === 'Listagem') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <HomeLista tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'ListaCliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <ListaCliente tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'ListaPet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <ListaPet tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'ListaProduto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <ListaProduto tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'ListaServico') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <ListaServico tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }





        else
        if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <HomeCadastro tema="#e3f2fd" seletorView={selecionarView}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'CadastroCliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <CadastroCliente tema="#e3f2fd" cliente={cliente}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'CadastroPet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <CadastroPet tema="#e3f2fd"/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'CadastroProduto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <CadastroProduto tema="#e3f2fd" produto={produto}/>
                    </div>
                </>
            )
        }
        else
        if (tela === 'CadastroServico') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
                    <div className="container-sm mt-5">
                        <CadastroServico tema="#e3f2fd" servico={servico}/>
                    </div>
                </>
            )
        }
        else {
            return (
                <div style={{ padding: 20 }}>
                    <h2>⚠️ Tela desconhecida: {tela}</h2>
                </div>
            )
        }
    }

    return (
        construirView()
    )
}