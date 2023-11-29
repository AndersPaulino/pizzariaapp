import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientedetailsComponent } from './clientedetails.component';
import { FormsModule } from '@angular/forms';

describe('ClientedetailsComponent', () => {
  let component: ClientedetailsComponent;
  let fixture: ComponentFixture<ClientedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientedetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClientedetailsComponent);
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
