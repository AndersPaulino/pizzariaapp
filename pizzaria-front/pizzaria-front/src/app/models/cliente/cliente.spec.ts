import { Cliente } from "./cliente";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Cliente', () => {
    let component: Cliente;
  let fixture: ComponentFixture<Cliente>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cliente],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(Cliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

//CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
});

});