import { Sabor } from "../sabor/sabor";

export class Pizza {
    id!: number;
    ativo!: boolean;
    sabor!: Sabor[];
    tamanho!: string;
    qtdeSabor!: number;
    valorPizza!: number;
    registro!: Date;
    atualizar!: Date;

    constructor() {
        this.sabor = [];
    }
}