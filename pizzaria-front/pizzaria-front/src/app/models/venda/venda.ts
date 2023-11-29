import { Bebida } from "../bebida/bebida";
import { Cliente } from "../cliente/cliente";
import { Funcionario } from "../funcionario/funcionario";
import { Pizza } from "../pizza/pizza";

export class Venda {
    id!: number;
    ativo!: boolean;
    cliente!: Cliente;
    funcionario!: Funcionario;
    pizzas!: Pizza[];
    bebidas!: Bebida[];
    emitirNota!: boolean;
    entregar!: boolean;
    valorVenda!: number;
    registro!: Date;
    atualizar!: Date;

    constructor() {
        this.pizzas = [];
        this.bebidas = [];
    }
}