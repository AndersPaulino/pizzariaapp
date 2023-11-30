import { Usuario } from 'src/app/models/usuario/usuario';

describe('Usuario', () => {
  let usuario: Usuario;

  beforeEach(() => {
    usuario = new Usuario();
  });

  it('should create an instance', () => {
    expect(usuario).toBeTruthy();
  });

  it('should have properties', () => {
    expect(usuario.login).toBeUndefined();
    expect(usuario.senha).toBeUndefined();
  });

  it('should set and get values', () => {
    usuario.login = 'john_doe';
    usuario.senha = 'password123';

    expect(usuario.login).toBe('john_doe');
    expect(usuario.senha).toBe('password123');
  });

  it('should initialize with empty values', () => {
    const newUsuario = new Usuario();

    expect(newUsuario.login).toBeUndefined();
    expect(newUsuario.senha).toBeUndefined();
  });

});
