import { Usuario } from "./usuario";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Usuario', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should create an instance', () => {
    const usuario = new Usuario();
    expect(usuario).toBeTruthy();
  });

});