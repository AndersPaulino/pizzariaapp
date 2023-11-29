import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariodetailsComponent } from './funcionariodetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('FuncionariodetailsComponent', () => {
  let component: FuncionariodetailsComponent;
  let fixture: ComponentFixture<FuncionariodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariodetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
  expect(component).toBeTruthy();
});
});
