import { Funcionario } from 'src/app/models/funcionario/funcionario';

describe('Funcionario', () => {
  let funcionario: Funcionario;

  beforeEach(() => {
    funcionario = new Funcionario();
  });

  it('should create an instance', () => {
    expect(funcionario).toBeTruthy();
  });

  it('should have properties', () => {
    expect(funcionario.id).toBeUndefined();
    expect(funcionario.ativo).toBeUndefined();
    expect(funcionario.nomeFuncionario).toBeUndefined();
    expect(funcionario.registro).toBeUndefined();
    expect(funcionario.atualizar).toBeUndefined();
  });

  it('should set and get values', () => {
    funcionario.id = 1;
    funcionario.ativo = true;
    funcionario.nomeFuncionario = 'John Doe';
    funcionario.registro = new Date('2023-01-01');
    funcionario.atualizar = new Date('2023-01-02');

    expect(funcionario.id).toBe(1);
    expect(funcionario.ativo).toBe(true);
    expect(funcionario.nomeFuncionario).toBe('John Doe');
    expect(funcionario.registro).toEqual(new Date('2023-01-01'));
    expect(funcionario.atualizar).toEqual(new Date('2023-01-02'));
  });

  it('should initialize with empty values', () => {
    const newFuncionario = new Funcionario();

    expect(newFuncionario.id).toBeUndefined();
    expect(newFuncionario.ativo).toBeUndefined();
    expect(newFuncionario.nomeFuncionario).toBeUndefined();
    expect(newFuncionario.registro).toBeUndefined();
    expect(newFuncionario.atualizar).toBeUndefined();
  });


});
