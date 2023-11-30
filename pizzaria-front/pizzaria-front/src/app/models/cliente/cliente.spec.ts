import { Cliente } from 'src/app/models/cliente/cliente';
import { Endereco } from 'src/app/models/endereco/endereco';

describe('Cliente', () => {
  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente();
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  it('should have properties', () => {
    expect(cliente.id).toBeUndefined();
    expect(cliente.ativo).toBeUndefined();
    expect(cliente.nomeCliente).toBeUndefined();
    expect(cliente.cpf).toBeUndefined();
    expect(cliente.endereco).toBeDefined();
    expect(cliente.registro).toBeUndefined();
    expect(cliente.atualizar).toBeUndefined();
  });

  it('should have an empty array for endereco property by default', () => {
    expect(cliente.endereco).toEqual([]);
  });

  it('should set and get values', () => {
    const endereco: Endereco = {
      id: 1,
      bairro: 'Bairro A',
      rua: 'Rua A',
      numero: 1,
      ativo: true,
      registro: new Date('2023-01-01'),
      atualizar: new Date('2023-01-02'),
    };

    cliente.id = 1;
    cliente.ativo = true;
    cliente.nomeCliente = 'John Doe';
    cliente.cpf = '123.456.789-01';
    cliente.endereco.push(endereco);
    cliente.registro = new Date('2023-01-01');
    cliente.atualizar = new Date('2023-01-02');

    expect(cliente.id).toBe(1);
    expect(cliente.ativo).toBe(true);
    expect(cliente.nomeCliente).toBe('John Doe');
    expect(cliente.cpf).toBe('123.456.789-01');
    expect(cliente.endereco).toEqual([endereco]);
    expect(cliente.registro).toEqual(new Date('2023-01-01'));
    expect(cliente.atualizar).toEqual(new Date('2023-01-02'));
  });
});
