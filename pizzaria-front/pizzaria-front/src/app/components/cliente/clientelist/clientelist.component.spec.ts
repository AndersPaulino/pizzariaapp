import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientelistComponent } from './clientelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClientelistComponent', () => {
  let component: ClientelistComponent;
  let fixture: ComponentFixture<ClientelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClientelistComponent);
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
