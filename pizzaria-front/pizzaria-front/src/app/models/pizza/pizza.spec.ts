import { Pizza } from 'src/app/models/pizza/pizza';
import { Sabor } from 'src/app/models/sabor/sabor';

describe('Pizza', () => {
  let pizza: Pizza;

  beforeEach(() => {
    pizza = new Pizza();
  });

  it('should create an instance', () => {
    expect(pizza).toBeTruthy();
  });

  it('should have properties', () => {
    expect(pizza.id).toBeUndefined();
    expect(pizza.ativo).toBeUndefined();
    expect(pizza.sabor).toBeDefined();
    expect(pizza.tamanho).toBeUndefined();
    expect(pizza.qtdeSabor).toBeUndefined();
    expect(pizza.valorPizza).toBeUndefined();
    expect(pizza.registro).toBeUndefined();
    expect(pizza.atualizar).toBeUndefined();
  });

  it('should set and get values', () => {
    const sabores: Sabor[] = [
      {
        id: 1,
        ativo: true,
        nomeSabor: 'Margherita',
        registro: new Date('2023-01-01'),
        atualizar: new Date('2023-01-02'),
      },
    ];

    pizza.id = 1;
    pizza.ativo = true;
    pizza.sabor = sabores;
    pizza.tamanho = 'Média';
    pizza.qtdeSabor = 1;
    pizza.valorPizza = 25.0;
    pizza.registro = new Date('2023-01-01');
    pizza.atualizar = new Date('2023-01-02');

    expect(pizza.id).toBe(1);
    expect(pizza.ativo).toBe(true);
    expect(pizza.sabor).toEqual(sabores);
    expect(pizza.tamanho).toBe('Média');
    expect(pizza.qtdeSabor).toBe(1);
    expect(pizza.valorPizza).toBe(25.0);
    expect(pizza.registro).toEqual(new Date('2023-01-01'));
    expect(pizza.atualizar).toEqual(new Date('2023-01-02'));
  });

  it('should initialize with empty values', () => {
    const newPizza = new Pizza();

    expect(newPizza.id).toBeUndefined();
    expect(newPizza.ativo).toBeUndefined();
    expect(newPizza.sabor).toEqual([]);
    expect(newPizza.tamanho).toBeUndefined();
    expect(newPizza.qtdeSabor).toBeUndefined();
    expect(newPizza.valorPizza).toBeUndefined();
    expect(newPizza.registro).toBeUndefined();
    expect(newPizza.atualizar).toBeUndefined();
  });

});
