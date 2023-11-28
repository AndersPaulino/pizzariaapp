import { Funcionario } from "./funcionario";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Funcionario', () => {
    let component: Funcionario;
  let fixture: ComponentFixture<Funcionario>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Funcionario],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(Funcionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

//CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
});

});