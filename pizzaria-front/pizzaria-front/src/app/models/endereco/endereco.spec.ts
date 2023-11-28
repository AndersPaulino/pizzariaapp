import { Endereco } from './endereco';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Endereco', () => {
    let component: Endereco;
  let fixture: ComponentFixture<Endereco>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Endereco],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(Endereco);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

//CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
});

});