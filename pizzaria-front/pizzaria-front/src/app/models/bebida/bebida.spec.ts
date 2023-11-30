import { Bebida } from 'src/app/models/bebida/bebida';

describe('Bebida', () => {
  let bebida: Bebida;

  beforeEach(() => {
    bebida = new Bebida();
  });

  it('should create an instance', () => {
    expect(bebida).toBeTruthy();
  });

  it('should have properties', () => {
    expect(bebida.id).toBeUndefined();
    expect(bebida.ativo).toBeUndefined();
    expect(bebida.nomeBebida).toBeUndefined();
    expect(bebida.valorBebida).toBeUndefined();
    expect(bebida.registro).toBeUndefined();
    expect(bebida.atualizar).toBeUndefined();
  });

  it('should set and get values', () => {
    bebida.id = 1;
    bebida.ativo = true;
    bebida.nomeBebida = 'Cola';
    bebida.valorBebida = 2.5;
    bebida.registro = new Date('2023-01-01');
    bebida.atualizar = new Date('2023-01-02');

    expect(bebida.id).toBe(1);
    expect(bebida.ativo).toBe(true);
    expect(bebida.nomeBebida).toBe('Cola');
    expect(bebida.valorBebida).toBe(2.5);
    expect(bebida.registro).toEqual(new Date('2023-01-01'));
    expect(bebida.atualizar).toEqual(new Date('2023-01-02'));
  });
});
