import Empresa from './modelo/empresa'
import CPF from './modelo/cpf'
import RG from './modelo/rg'
import Telefone from './modelo/telefone'

export default class Populador{
    public empresa: Empresa

    constructor(empresa:Empresa){
        this.empresa = empresa
    }

    public popular(): void{
        // CLIENTES
        const cpf1 = new CPF("12345678901", new Date("2001-01-01"))
        const rgs1 = [new RG("MG1234567", new Date("1999-01-01"))]
        const tels1 = [new Telefone("31", "99999-9999")]
    
        const cpf2 = new CPF("10987654321", new Date("1985-05-20"))
        const rgs2 = [new RG("SP7654321", new Date("1990-03-05"))]
        const tels2 = [new Telefone("11", "98888-8888")]
    
        const cpf3 = new CPF("11122233344", new Date("1992-12-15"))
        const rgs3 = [new RG("RJ1122334", new Date("1992-12-21"))]
        const tels3 = [new Telefone("21", "97777-7777")]
    
        const cliente1 = this.empresa.postCliente("João Silva", "João", cpf1, rgs1, tels1)
        const cliente2 = this.empresa.postCliente("Maria Oliveira", "Maria", cpf2, rgs2, tels2)
        const cliente3 = this.empresa.postCliente("Carlos Pereira", "Carlos", cpf3, rgs3, tels3)

        // PETS
        // Pets do João
        cliente1.postPet("Rex", "Cachorro", "Labrador", "Macho")
        cliente1.postPet("Luna", "Gato", "Siamês", "Fêmea")

        // Pets da Maria
        cliente2.postPet("Thor", "Cachorro", "Poodle", "Macho")
        cliente2.postPet("Mia", "Gato", "Persa", "Fêmea")

        // Pets do Carlos
        cliente3.postPet("Bolt", "Cachorro", "Vira-lata", "Macho")
    
        // PRODUTOS
        this.empresa.postProduto("Ração para gatos", 59.90)
        this.empresa.postProduto("Areia higiênica", 34.50)
        this.empresa.postProduto("Brinquedo arranhador", 120.00)
    
        // SERVIÇOS
        this.empresa.postServico("Banho e Tosa", 59.90)
        this.empresa.postServico("Adestramento", 34.50)
        this.empresa.postServico("Diária Premium", 120.00)
    }
}
