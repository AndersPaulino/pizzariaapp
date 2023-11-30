import { Sabor } from 'src/app/models/sabor/sabor';

describe('Sabor', () => {
  let sabor: Sabor;

  beforeEach(() => {
    sabor = new Sabor();
  });

  it('should create an instance', () => {
    expect(sabor).toBeTruthy();
  });

  it('should have properties', () => {
    expect(sabor.id).toBeUndefined();
    expect(sabor.ativo).toBeUndefined();
    expect(sabor.nomeSabor).toBeUndefined();
    expect(sabor.registro).toBeUndefined();
    expect(sabor.atualizar).toBeUndefined();
  });

  it('should set and get values', () => {
    sabor.id = 1;
    sabor.ativo = true;
    sabor.nomeSabor = 'Margherita';
    sabor.registro = new Date('2023-01-01');
    sabor.atualizar = new Date('2023-01-02');

    expect(sabor.id).toBe(1);
    expect(sabor.ativo).toBe(true);
    expect(sabor.nomeSabor).toBe('Margherita');
    expect(sabor.registro).toEqual(new Date('2023-01-01'));
    expect(sabor.atualizar).toEqual(new Date('2023-01-02'));
  });

  it('should initialize with empty values', () => {
    const newSabor = new Sabor();

    expect(newSabor.id).toBeUndefined();
    expect(newSabor.ativo).toBeUndefined();
    expect(newSabor.nomeSabor).toBeUndefined();
    expect(newSabor.registro).toBeUndefined();
    expect(newSabor.atualizar).toBeUndefined();
  });

});
