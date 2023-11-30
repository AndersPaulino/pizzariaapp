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

  it('should have default values', () => {
    expect(venda.id).toBeUndefined();
    expect(venda.ativo).toBeUndefined();
    expect(venda.cliente).toEqual([]);
    expect(venda.funcionario).toEqual([]);
    expect(venda.pizzas).toEqual([]);
    expect(venda.bebidas).toEqual([]);
    expect(venda.emitirNota).toBeUndefined();
    expect(venda.entregar).toBeUndefined();
    expect(venda.valorVenda).toBeUndefined();
    expect(venda.registro).toBeUndefined();
    expect(venda.atualizar).toBeUndefined();
  });

  it('should set and get values correctly', () => {
    const mockCliente: Cliente[] = [{ id: 1, ativo: true, nomeCliente: 'Test Cliente', cpf: '123456789', registro: new Date(), atualizar: new Date(), endereco: [] }];
    const mockFuncionario: Funcionario[] = [{ id: 1, ativo: true, nomeFuncionario: 'Test Funcionario', registro: new Date(), atualizar: new Date() }];
    const mockPizza: Pizza[] = [{id: 1,ativo: true,sabor: [{id: 1,ativo: true,nomeSabor:'Calabresa',registro: new Date(),atualizar: new Date()}],valorPizza: 10.99,qtdeSabor: 1,tamanho: 'PEQUENA',registro: new Date(),atualizar: new Date()}];
    const mockBebida: Bebida[] = [{ id: 1, ativo: true,nomeBebida: 'Test Bebida', valorBebida: 5.99 ,registro: new Date(),atualizar: new Date()}];

    venda.id = 1;
    venda.ativo = true;
    venda.cliente = mockCliente;
    venda.funcionario = mockFuncionario;
    venda.pizzas = mockPizza;
    venda.bebidas = mockBebida;
    venda.emitirNota = true;
    venda.entregar = true;
    venda.valorVenda = 20.98;
    venda.registro = new Date('2023-01-01');
    venda.atualizar = new Date('2023-01-02');

    expect(venda.id).toEqual(1);
expect(venda.ativo).toEqual(true);
expect(venda.cliente).toEqual(mockCliente);
expect(venda.funcionario).toEqual(mockFuncionario);

// Adjusted expectations for mockPizza and mockBebida
expect(venda.pizzas[0].id).toEqual(mockPizza[0].id);
expect(venda.pizzas[0].ativo).toEqual(mockPizza[0].ativo);
expect(venda.pizzas[0].sabor[0].id).toEqual(mockPizza[0].sabor[0].id);
expect(venda.pizzas[0].sabor[0].ativo).toEqual(mockPizza[0].sabor[0].ativo);
expect(venda.pizzas[0].sabor[0].nomeSabor).toEqual(mockPizza[0].sabor[0].nomeSabor);
expect(venda.pizzas[0].valorPizza).toEqual(mockPizza[0].valorPizza);
expect(venda.pizzas[0].qtdeSabor).toEqual(mockPizza[0].qtdeSabor);
expect(venda.pizzas[0].tamanho).toEqual(mockPizza[0].tamanho);
expect(venda.pizzas[0].registro).toEqual(mockPizza[0].registro);
expect(venda.pizzas[0].atualizar).toEqual(mockPizza[0].atualizar);

expect(venda.bebidas[0].id).toEqual(mockBebida[0].id);
expect(venda.bebidas[0].ativo).toEqual(mockBebida[0].ativo);
expect(venda.bebidas[0].nomeBebida).toEqual(mockBebida[0].nomeBebida);
expect(venda.bebidas[0].valorBebida).toEqual(mockBebida[0].valorBebida);
expect(venda.bebidas[0].registro).toEqual(mockBebida[0].registro);
expect(venda.bebidas[0].atualizar).toEqual(mockBebida[0].atualizar);

expect(venda.emitirNota).toEqual(true);
expect(venda.entregar).toEqual(true);
expect(venda.valorVenda).toEqual(20.98);
expect(venda.registro).toEqual(new Date('2023-01-01'));
expect(venda.atualizar).toEqual(new Date('2023-01-02'));

  });

});
