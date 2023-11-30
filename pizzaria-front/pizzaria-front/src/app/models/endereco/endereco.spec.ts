import { Endereco } from 'src/app/models/endereco/endereco';

describe('Endereco', () => {
  let endereco: Endereco;

  beforeEach(() => {
    endereco = new Endereco();
  });

  it('should create an instance', () => {
    expect(endereco).toBeTruthy();
  });

  it('should have properties', () => {
    expect(endereco.id).toBeUndefined();
    expect(endereco.ativo).toBeUndefined();
    expect(endereco.bairro).toBeUndefined();
    expect(endereco.rua).toBeUndefined();
    expect(endereco.numero).toBeUndefined();
    expect(endereco.registro).toBeUndefined();
    expect(endereco.atualizar).toBeUndefined();
  });

  it('should set and get values', () => {
    endereco.id = 1;
    endereco.ativo = true;
    endereco.bairro = 'Bairro A';
    endereco.rua = 'Rua A';
    endereco.numero = 123;
    endereco.registro = new Date('2023-01-01');
    endereco.atualizar = new Date('2023-01-02');

    expect(endereco.id).toBe(1);
    expect(endereco.ativo).toBe(true);
    expect(endereco.bairro).toBe('Bairro A');
    expect(endereco.rua).toBe('Rua A');
    expect(endereco.numero).toBe(123);
    expect(endereco.registro).toEqual(new Date('2023-01-01'));
    expect(endereco.atualizar).toEqual(new Date('2023-01-02'));
  });
});
