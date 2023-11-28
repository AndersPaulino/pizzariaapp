import { Sabor } from "./sabor";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Sabor', () => {
    let component: Sabor;
  let fixture: ComponentFixture<Sabor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sabor],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(Sabor);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

//CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
});

});