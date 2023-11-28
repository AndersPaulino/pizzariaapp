import { Usuario } from "./usuario";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Usuario', () => {
    let component: Usuario;
  let fixture: ComponentFixture<Usuario>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Usuario],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(Usuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

//CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
});

});