import { Venda } from 'src/app/models/venda/venda';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Bebida } from 'src/app/models/bebida/bebida';

describe('Venda', () => {
  let venda: Venda;

  beforeEach(() => {
    venda = new Venda();
  });

  it('should create an instance', () => {
    expect(venda).toBeTruthy();
  });

  it('should handle boolean properties', () => {
    venda.emitirNota = true;
    venda.entregar = false;

    expect(venda.emitirNota).toBe(true);
    expect(venda.entregar).toBe(false);
  });

  it('should set and get values', () => {
    const cliente = new Cliente();
    const funcionario = new Funcionario();
    const pizza = new Pizza();
    const bebida = new Bebida();

    venda.id = 1;
    venda.ativo = true;
    venda.cliente = cliente;
    venda.funcionario = funcionario;
    venda.pizzas = [pizza];
    venda.bebidas = [bebida];
    venda.emitirNota = false;
    venda.entregar = true;
    venda.valorVenda = 50.0;
    venda.registro = new Date('2023-01-01');
    venda.atualizar = new Date('2023-01-02');

    expect(venda.id).toBe(1);
    expect(venda.ativo).toBe(true);
    expect(venda.cliente).toBe(cliente);
    expect(venda.funcionario).toBe(funcionario);
    expect(venda.pizzas).toEqual([pizza]);
    expect(venda.bebidas).toEqual([bebida]);
    expect(venda.emitirNota).toBe(false);
    expect(venda.entregar).toBe(true);
    expect(venda.valorVenda).toBe(50.0);
    expect(venda.registro).toEqual(new Date('2023-01-01'));
    expect(venda.atualizar).toEqual(new Date('2023-01-02'));
  });


});
