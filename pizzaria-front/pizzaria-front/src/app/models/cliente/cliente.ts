import { Endereco } from "../endereco/endereco";

export class Cliente {
    id!: number;
    ativo!: boolean;
    nomeCliente!: string;
    cpf!: string;
    endereco!: Endereco;
    registro!: Date;
    atualizar!: Date;
}